# ffmpeg

```bash
# 将一个视频分割为 两个视频
ffmpeg -i input_video.mp4 -t 00:02:30 -c copy output_part1.mp4
ffmpeg -i input_video.mp4 -ss 00:02:30 -c copy output_part2.mp4
ffmpeg -ss 01:30:00 -t 00:30:00 -i input.mp4 -c copy output.mp4
# 将四个视频合并为 一个视频 注意添加线程数 防止电脑死机
ffmpeg -i 1.mp4 -i 2.mp4 -i 3.mp4 -i 4.mp4 -filter_complex "concat=n=4:v=1:a=1" -threads 4 output.mp4
```

实测 AMD R7-3800X 8Core16Thread 在不加 threads 的情况下，会直接死机

为了使用FFmpeg从视频中提取照片，你需要首先确保你的系统上安装了FFmpeg。以下是如何使用FFmpeg从视频中提取单帧为图像的基本命令：

```bash
ffmpeg -i input_video.mp4 -ss 00:00:10 -frames:v 1 output_image.png
```

这里是命令参数的简要解释：

- `-i input_video.mp4`: 指定输入文件，这里是你的视频文件。
- `-ss 00:00:10`: 指定从视频的具体时间码开始抓取帧。这个例子中是从视频开始的第10秒处获取。
- `-frames:v 1`: 表示你要从这个时间码开始提取的视频帧的数量，这里我们设置为 1，即提取单一的帧作为图像。
- `output_image.png`: 是输出文件的名字和格式。

如果你想要从视频中提取多个图片，改变 `-frames:v` 参数的值或使用其他方法如指定一个频率 `-vf "fps=1"` 来每秒提取一帧。

请注意，这个命令提取的单帧将会根据你提供的准确时间戳来选择，并且输出文件的格式可以是你选择的任何FFmpeg支持的图片格式，如 JPG, PNG 等。

确保替换 `input_video.mp4` 和 `output_image.png` 为你自己的视频文件名和希望保存的图像文件名。
