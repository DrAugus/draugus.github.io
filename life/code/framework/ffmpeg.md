# FFmpeg

## 视频分割、合并

```bash
# 将一个视频分割为 两个视频
ffmpeg -i input_video.mp4 -t 00:02:30 -c copy output_part1.mp4
ffmpeg -i input_video.mp4 -ss 00:02:30 -c copy output_part2.mp4
ffmpeg -ss 01:30:00 -t 00:30:00 -i input.mp4 -c copy output.mp4
# 将四个视频合并为 一个视频 注意添加线程数 防止电脑死机
ffmpeg -i 1.mp4 -i 2.mp4 -i 3.mp4 -i 4.mp4 -filter_complex "concat=n=4:v=1:a=1" -threads 4 output.mp4
```

实测 AMD R7-3800X 8Core16Thread 在不加 threads 的情况下，会直接死机

## 提取图片

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

### 提取所有图片

要使用FFmpeg将视频中的全部帧提取为图片，你可以使用FFmpeg的命令行工具。以下是一个基本的命令示例，它会把视频中的每一帧都保存为一张图片（通常是JPEG或PNG格式）。

#### 提取为JPEG图片

```bash
ffmpeg -i input.mp4 -vf fps=1 output%d.jpg
```

但上面的命令实际上并不总是按照视频的实际帧率来提取每一帧（除非你设置的`fps`值与视频的实际帧率相匹配）。如果你想要确保提取视频中的**每一帧**，应该省略`-vf fps=1`部分，因为这会限制FFmpeg输出的帧率。

**正确的命令**（提取视频中的每一帧为JPEG图片）：

```bash
ffmpeg -i input.mp4 -qscale:v 2 output%d.jpg
```

这里，`-qscale:v 2`是用来设置输出JPEG图片的质量的（范围从1（最好）到31（最差），但并非所有编解码器都遵循这个范围）。注意，这个参数可能会根据你的FFmpeg版本和编译选项有所不同。对于新版本的FFmpeg，你可能需要使用`-q:v`代替`-qscale:v`。

#### 提取为PNG图片

PNG是一种无损格式，适合需要高质量图像的场景。

```bash
ffmpeg -i input.mp4 -vf fps=1 output%d.png
```

但同样，如果你想要提取**每一帧**，应省略`-vf fps=1`：

```bash
ffmpeg -i input.mp4 output%d.png
```

:::warning 注意

- `%d`是一个占位符，FFmpeg会自动用帧的序号替换它。
- 根据你的视频长度和分辨率，这将生成大量的图片文件，可能会占用大量磁盘空间。
- 如果你的视频有音频轨道，FFmpeg会忽略它，因为只关注视频帧。
- 提取的帧速率（FPS）和视频的实际帧率可能不同，除非你特别指定了`-vf fps=原视频帧率`（但通常很难知道确切的帧率，除非你已经知道了）。
- 某些编解码器或视频格式可能不支持直接提取每一帧，但大多数情况下，上述命令应该工作得很好。
:::

## 查看视频详细信息

```bash
ffmpeg -i your_video.mp4
```
