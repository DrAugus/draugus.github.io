# OpenCV

[opencv.org](https://opencv.org/)

## [Reading and Writing Videos using OpenCV](https://learnopencv.com/reading-and-writing-videos-using-opencv/)

The following code creates the video writer object, output from the VideoWriter() class. A special convenience function is used to retrieve the four-character codec, required as the second argument to the video writer object, cv2.

:::code-group

```py
VideoWriter_fourcc('M', 'J', 'P', 'G')
```

```cpp
VideoWriter::fourcc('M', 'J', 'P', 'G')
```

:::
The video codec specifies how the video stream is compressed. It converts uncompressed video to a compressed format or vice versa. To create AVI or MP4 formats, use the following fourcc specifications:

```py
# AVI
cv2.VideoWriter_fourcc('M','J','P','G')
# MP4
cv2.VideoWriter_fourcc(*'XVID')
```
