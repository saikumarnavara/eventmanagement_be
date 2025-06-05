# 📘 API Documentation

## 🎠 Carousel Routes

### 1. Get All Carousel Data

- **URL**: `http://localhost:8080/app/get-carousel-data`
- **Method**: `GET`
- **Response**: 200 OK

---

### 2. Create Carousel Item

- **URL**: `http://localhost:8080/app/upload-carousel-data`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "imgURL": "https://example.com/image.jpg"
  }
  ```

---

### 3. Delete Carousel Item

- **URL**: `http://localhost:8080/app/delete-carousel-data/:id`
- **Method**: `DELETE`
- **Example**: `/app/delete-carousel-data/665f8d2a1f3c0b6e4a7c1234`

---

## ⭐ Review Routes

### 1. Get All Reviews

- **URL**: `http://localhost:8080/app/get-reviews-data`
- **Method**: `GET`

---

### 2. Create Review

- **URL**: `http://localhost:8080/app/upload-reviews-data`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "name": "John Doe",
    "review": "Excellent service!",
    "rating": 5
  }
  ```

---

### 3. Delete Review

- **URL**: `http://localhost:8080/app/delete-reviews-data/:id`
- **Method**: `DELETE`

---

## 💍 Testimonial Routes

### 1. Get All Testimonials

- **URL**: `http://localhost:8080/app/get-testimonials`
- **Method**: `GET`

---

### 2. Create Testimonial

- **URL**: `http://localhost:8080/app/upload-testimonial`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "groomName": "Raj",
    "brideName": "Priya",
    "description": "Beautiful wedding!",
    "imageURL": "https://example.com/image.jpg",
    "videoURL": "https://example.com/video.mp4",
    "rating": 5
  }
  ```

---

### 3. Delete Testimonial

- **URL**: `http://localhost:8080/app/delete-testimonial/:id`
- **Method**: `DELETE`

# 📦 Events API Documentation

## 1. Get All Events

- **Endpoint:** `GET /app/get-events-data`
- **Description:** Returns all events sorted by creation date (newest first).
- **Response Example:**

```json
{
  "success": true,
  "data": [...]
}
```

# Contact Us API Documentation

## 1. Get Contacted Users

- **Method:** GET
- **Endpoint:** `http://localhost:8080/app/get-contacted-users`
- **Description:** Fetches the list of users who have submitted contact messages.

### Response

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [
    {
      "_id": "unique_id",
      "name": "John Doe",
      "phone": "9876543210",
      "message": "I would like to know more about your services.",
      "createdAt": "2025-06-05T12:00:00.000Z",
      "updatedAt": "2025-06-05T12:00:00.000Z"
    }
  ]
}
```
