import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import VideoUploader from "@/components/VideoUploader";
import { toast } from "sonner";

const Admin = () => {
  const [videoUrl, setVideoUrl] = useState("https://cdn.poehali.dev/your-video.mp4");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === "robowash2024") {
      setIsAuthenticated(true);
      toast.success("Вход выполнен");
    } else {
      toast.error("Неверный пароль");
    }
  };

  const handleVideoUploaded = (url: string) => {
    setVideoUrl(url);
    toast.success(
      `Видео загружено! Теперь обновите src в HeroSection.tsx на: ${url}`,
      { duration: 10000 }
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <div className="text-center mb-8">
            <Icon name="Lock" size={48} className="mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold">Админ-панель</h1>
            <p className="text-muted-foreground mt-2">Введите пароль для доступа</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Пароль"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full" size="lg">
              <Icon name="LogIn" size={20} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Админ-панель RoboWash</h1>
            <p className="text-muted-foreground">Управление контентом сайта</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
            }}
          >
            <Icon name="LogOut" size={20} className="mr-2" />
            Выйти
          </Button>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Video" size={28} />
              Видео на главной странице
            </h2>
            <VideoUploader
              currentVideoUrl={videoUrl}
              onVideoUploaded={handleVideoUploaded}
            />
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <Icon name="Info" size={16} className="inline mr-1" />
                После загрузки видео:
              </p>
              <ol className="text-sm space-y-1 ml-4 list-decimal">
                <li>Скопируйте URL загруженного видео</li>
                <li>Откройте файл <code className="bg-background px-1 py-0.5 rounded">src/components/HeroSection.tsx</code></li>
                <li>Найдите строку с <code className="bg-background px-1 py-0.5 rounded">src="https://cdn.poehali.dev/your-video.mp4"</code></li>
                <li>Замените URL на новый</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
