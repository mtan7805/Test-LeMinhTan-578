# Logic Play/Pause khi cuộn trang (Video Autoplay Scroll)

### 1. Nhận diện video hiển thị (tại [VideoFeed.tsx](app/components/VideoFeed.tsx))

- Sử dụng **`IntersectionObserver`** theo dõi các thẻ `<section data-video-id="...">`.
- Cấu hình `threshold: 0.6` (khi 60% diện tích video nằm trong khung nhìn).
- Khi cuộn, video nào chiếm ưu thế sẽ được cập nhật ID vào state `activeVideoId`.

### 2. Phát/Dừng video tự động (tại [VideoCard.tsx](app/components/VideoCard.tsx))

Mỗi thẻ nhận prop `isActive = (video.id === activeVideoId)`. Sử dụng `useEffect` lắng nghe `[isActive]`:

- **Khi `isActive === true` (vừa cuộn tới):**
  - Bật trạng thái chờ tải (`isLoading = true`).
  - Gọi hàm bất đồng bộ **`videoEl.play()`** để phát video (kèm `.catch()` phòng trường hợp trình duyệt chặn phát tự động).
- **Khi `isActive === false` (vừa cuộn đi):**
  - Gọi **`videoEl.pause()`** để tạm dừng video.
  - Đặt **`videoEl.currentTime = 0`** đưa video về giây đầu tiên, giải phóng bộ nhớ đệm của trình duyệt.

---

## Hướng dẫn chạy dự án 

Để khởi chạy dự án trên môi trường local của bạn, hãy làm theo các bước sau:

1. **Cài đặt các thư viện phụ thuộc (dependencies):**
   ```bash
   npm install
   ```

2. **Khởi động local development server:**
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt:**
   Truy cập vào địa chỉ [http://localhost:3000](http://localhost:3000) để xem kết quả.

