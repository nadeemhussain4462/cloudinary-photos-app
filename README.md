
# 🌤️ Cloudinary Photos App  

A fully functional photo application built with **Next.js** and **TailwindCSS**, integrated with **Cloudinary** for image storage and management.  

## 🚀 Features  
- 📸 **Upload Images:** Seamless photo upload functionality.  
- 🖼️ **Image Gallery:** Display uploaded images in a responsive grid layout.  
- 🗑️ **Delete Images:** Easily remove unwanted photos from your Cloudinary account.  
- 🔍 **Preview Photos:** View photos with zoom or modal previews.  
- 📂 **Cloudinary Integration:** Efficient image storage and retrieval via Cloudinary's API.  

## 🛠️ Tech Stack  
- **Framework:** [Next.js](https://nextjs.org/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/)  
- **Image Management:** [Cloudinary](https://cloudinary.com/)  
- **Deployment:** [Vercel](https://vercel.com/)  

## 🖥️ Installation  

Follow these steps to set up and run the app locally:  

### 1. Clone the Repository  
```bash  
git clone https://github.com/nadeemhussain4462/cloudinary-photos-app.git  
cd cloudinary-photos-app  
```  

### 2. Install Dependencies  
```bash  
npm install  
```  

### 3. Configure Environment Variables  
Create a `.env.local` file in the root directory and add the following variables:  

```env  
CLOUDINARY_CLOUD_NAME=your-cloud-name  
CLOUDINARY_API_KEY=your-api-key  
CLOUDINARY_API_SECRET=your-api-secret  
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-upload-preset  
```  

### 4. Start the Development Server  
```bash  
npm run dev  
```  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.  

## 🖼️ Screenshots  

### **Gallery View**  
![Gallery View](https://plus.unsplash.com/premium_photo-1712685912266-aa85a267a419?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)  

### **Upload Photo**  
![Upload Photo](https://plus.unsplash.com/premium_photo-1712016875106-387d73f0019b?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)  

## 📂 Project Structure  
```bash  
cloudinary-photos-app/  
├── components/          # Reusable UI components  
├── pages/               # Next.js pages  
├── styles/              # TailwindCSS configuration and global styles  
├── utils/               # Helper functions (e.g., Cloudinary API integration)  
├── public/              # Static assets  
├── .env.local           # Environment variables (not committed)  
├── package.json         # Dependencies and scripts  
└── README.md            # Project documentation  
```  

## 🌐 Deployment  
Deploy this app easily using [Vercel](https://vercel.com/):  
1. Push your code to GitHub.  
2. Connect your GitHub repo with Vercel.  
3. Add your environment variables in the Vercel dashboard.  
4. Deploy the app and share your live link!  

## 🤝 Contributing  
Contributions are welcome! Please fork this repository and open a pull request with your changes.  

## 📜 License  
This project is licensed under the MIT License.  

## 👨‍💻 Author  
**Nadeem Hussain**  
- GitHub: [@nadeemhussain4462](https://github.com/nadeemhussain4462)  
- LinkedIn: [Nadeem hussain](https://www.linkedin.com/in/nadeem-hussain-96080820b/)  
