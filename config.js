// ตั้งค่าการเชื่อมต่อ Supabase ของร้าน (โปรเจกต์ tukai)
// ใส่ได้เฉพาะ "publishable" key หรือ "anon public" key เท่านั้น
// ห้ามใส่ service_role key หรือ secret key เด็ดขาด เพราะไฟล์นี้ทุกคนเปิดดูได้
window.CAPTION_CONFIG = {
  supabaseUrl: 'https://pgqyhgcqygpcaacsfuhs.supabase.co',
  supabaseKey: 'sb_publishable_rWLx7W5daJt5KkieUnZNqA_R2Fsvj2a',
  // บัญชีทีมที่ใช้ร่วมกัน: หน้าเว็บให้ใส่แค่รหัสทีม (รหัสผ่านของบัญชีนี้)
  teamEmail: 'caption-team@example.com',
};
