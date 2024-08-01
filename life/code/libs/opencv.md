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

## 实践

### 读取视频中每一帧保存为图片

```py
import cv2  
  
# 创建一个VideoCapture对象，参数是视频文件的名称  
cap = cv2.VideoCapture('vtest.avi')  
  
# 检查视频是否成功打开  
if not cap.isOpened():  
    print("Error: Could not open video.")  
    exit()  
  
# 读取视频帧  
frame_id = 0  # 用于给保存的图片命名  
while True:  
    ret, frame = cap.read()  
      
    # 如果正确读取帧，ret为True  
    if not ret:  
        print("Can't receive frame (stream end?). Exiting ...")  
        break  
  
    # 保存帧为图片  
    # 这里假设你想把图片保存在当前目录下，文件名为"frame_{frame_id}.jpg"  
    filename = f'frame_{frame_id}.jpg'  
    cv2.imwrite(filename, frame)  
    print(f'Frame {frame_id} saved as {filename}')  
      
    # 递增frame_id，为下一帧的图片命名  
    frame_id += 1  
  
    # 如果你想查看每一帧（可选），可以取消下面这行代码的注释  
    # cv2.imshow('Frame', frame)  
    # 如果按下'q'键，则退出循环  
    # if cv2.waitKey(1) & 0xFF == ord('q'):  
    #     break  
  
# 释放VideoCapture对象  
cap.release()  
# 关闭所有OpenCV窗口  
# cv2.destroyAllWindows()
```
