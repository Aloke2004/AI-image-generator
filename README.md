# **AI Image Generator ✨**

An AI-powered image generator that transforms your text prompts into stunning visuals using Hugging Face's Stable Diffusion model. Built with **React** and integrated with **Hugging Face API**, this app allows you to describe anything in words and see it come to life as an image!

---

## **📸 Features**

- **AI-Generated Images:** Enter any prompt and get a unique AI-generated image.
- **Real-Time Loading Indicator:** See a smooth loading animation while your image is being generated.
- **Responsive UI:** Clean, user-friendly, and mobile-responsive design.
- **Environment Variables:** Secure API key management using `.env` files.
  
---

## **🛠️ Tech Stack**

- **Frontend:** React, HTML5, CSS3
- **API:** [Hugging Face Inference API](https://huggingface.co/inference-api)
- **HTTP Client:** Axios
- **Assets:** SVG and image files for placeholders

---

## **⚙️ Setup and Installation**

### **1. Clone the Repository**

git clone https://github.com/YOUR-USERNAME/AI-Image-Generator.git
cd AI-Image-Generator

### **2. Install Dependencies**

Make sure you have **Node.js** installed. Then run:

npm install

---

## **Set Up Environment Variables**

1. Create a `.env` file in the root directory.
2. Add your Hugging Face API key and URL to the `.env` file:

REACT_APP_HUGGING_FACE_API_KEY=your_hugging_face_api_key_here

REACT_APP_HUGGING_FACE_URL=https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2

---

## 🔑 **Environment Variables**

| Variable                         | Description                              |
|----------------------------------|------------------------------------------|
| `REACT_APP_HUGGING_FACE_API_KEY` | Your Hugging Face API key                |
| `REACT_APP_HUGGING_FACE_URL`     | The URL for the Stable Diffusion model   |

---

## 🤝 **Contributing**

Contributions are welcome! 🚀 Feel free to **fork** this repository, **open an issue**, or **submit a pull request** for any improvements or bug fixes.

