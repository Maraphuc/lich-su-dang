import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email sending endpoint
  app.post("/api/send-result", async (req, res) => {
    const { 
      userName, 
      chapterTitle, 
      mode, 
      score, 
      totalQuestions, 
      elapsedTime, 
      timestamp 
    } = req.body;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || "maraphuc94@gmail.com";

    // Validate config
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP configuration is missing. Skipping email send.");
      return res.status(200).json({ status: "skipped", message: "SMTP not configured" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Quiz Lịch Sử Đảng" <${smtpUser}>`,
        to: receiverEmail,
        subject: `Kết quả Quiz: ${chapterTitle} - ${userName || 'Người dùng'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">Kết quả hoàn thành bài thi/ôn tập</h2>
            <p><strong>Người dùng:</strong> ${userName || 'Ẩn danh'}</p>
            <p><strong>Nội dung:</strong> ${chapterTitle}</p>
            <p><strong>Chế độ:</strong> ${mode === 'exam' ? 'Thi thử' : 'Ôn tập'}</p>
            <p><strong>Điểm số:</strong> <span style="font-size: 1.2em; color: #2563eb;">${score} / ${totalQuestions}</span></p>
            <p><strong>Thời gian làm bài:</strong> ${elapsedTime}</p>
            <p><strong>Thời điểm hoàn thành:</strong> ${new Date(timestamp).toLocaleString('vi-VN')}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 0.8em; color: #666;">Đây là thông báo tự động từ ứng dụng Quiz Lịch Sử Đảng.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ status: "ok" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "error", message: (error as Error).message });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
