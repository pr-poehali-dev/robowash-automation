/**
 * Business: Отправка заявок с сайта в Telegram бот
 * Args: event с httpMethod, body (name, city, phone)
 * Returns: HTTP response с результатом отправки
 */

exports.handler = async (event, context) => {
    const { httpMethod, body } = event;
    
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            body: '',
            isBase64Encoded: false
        };
    }
    
    if (httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Method not allowed' }),
            isBase64Encoded: false
        };
    }
    
    const formData = JSON.parse(body || '{}');
    
    if (!formData.name || !formData.city || !formData.phone) {
        return {
            statusCode: 400,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Missing required fields' }),
            isBase64Encoded: false
        };
    }
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
        return {
            statusCode: 500,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Telegram credentials not configured' }),
            isBase64Encoded: false
        };
    }
    
    const message = `🔔 Новая заявка с сайта RoboWash!\n\n` +
                   `👤 Имя: ${formData.name}\n` +
                   `🏙 Город: ${formData.city}\n` +
                   `📞 Телефон: ${formData.phone}\n\n` +
                   `⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })}`;
    
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
    });
    
    const result = await response.json();
    
    if (!response.ok) {
        return {
            statusCode: 500,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Failed to send message to Telegram',
                details: result 
            }),
            isBase64Encoded: false
        };
    }
    
    return {
        statusCode: 200,
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
            success: true,
            message: 'Заявка успешно отправлена!' 
        }),
        isBase64Encoded: false
    };
};
