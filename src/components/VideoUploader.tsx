import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

interface VideoUploaderProps {
  onVideoUploaded: (url: string) => void;
  currentVideoUrl?: string;
}

const VideoUploader = ({ onVideoUploaded, currentVideoUrl }: VideoUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error('Выберите видео файл');
      return;
    }

    const maxSize = 200 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('Файл слишком большой. Максимум 200 МБ');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const videoUrl = `https://cdn.poehali.dev/${response.path}`;
          onVideoUploaded(videoUrl);
          toast.success('Видео успешно загружено!');
        } else {
          toast.error('Ошибка загрузки видео');
        }
        setUploading(false);
        setUploadProgress(0);
      });

      xhr.addEventListener('error', () => {
        toast.error('Ошибка загрузки видео');
        setUploading(false);
        setUploadProgress(0);
      });

      xhr.open('POST', 'https://cdn.poehali.dev/upload');
      xhr.send(formData);
    } catch (error) {
      toast.error('Ошибка загрузки видео');
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Video" size={24} />
          Загрузить видео
        </CardTitle>
        <CardDescription>
          Выберите видео файл для загрузки на сервер (макс. 200 МБ)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentVideoUrl && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Текущее видео:</p>
            <p className="text-xs font-mono break-all">{currentVideoUrl}</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <label htmlFor="video-upload" className="cursor-pointer">
            <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-primary/50 rounded-lg hover:border-primary hover:bg-primary/5 transition-all">
              <div className="text-center">
                <Icon name="Upload" size={32} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">
                  {uploading ? 'Загрузка...' : 'Выберите видео'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  MP4, MOV, AVI до 200 МБ
                </p>
              </div>
            </div>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileSelect}
              disabled={uploading}
            />
          </label>

          {uploading && (
            <div className="w-full space-y-2">
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                {uploadProgress}%
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUploader;
