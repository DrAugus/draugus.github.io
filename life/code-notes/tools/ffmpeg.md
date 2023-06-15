# ffmpeg

```bash
# 将一个视频分割为 两个视频
ffmpeg -i input_video.mp4 -t 00:02:30 -c copy output_part1.mp4
ffmpeg -i input_video.mp4 -ss 00:02:30 -c copy output_part2.mp4
# 将四个视频合并为 一个视频 注意添加线程数 防止电脑死机
ffmpeg -i 1.mp4 -i 2.mp4 -i 3.mp4 -i 4.mp4 -filter_complex "concat=n=4:v=1:a=1" -threads 4 output.mp4
```

实测 AMD R7-3800X 8Core16Thread 在不加 threads 的情况下，会直接死机
