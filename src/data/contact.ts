/**
 * CONTACT — SAMUEL TAMBUNAN
 * =====================================================
 * `endpoint` dikosongkan sampai layanan formulir dikonfigurasi.
 * Saat kosong, tombol "Send Message" membuka client email
 * (mailto:) dengan isian form — tidak pernah berpura-pura sukses.
 *
 * Integrasi nyata (opsional): gunakan Formspree/EmailJS/API sendiri,
 * lalu isi endpoint di sini. Jangan pernah menaruh API key di frontend.
 */
export const contactConfig = {
  endpoint: '',
  method: 'POST' as const,
  headers: { 'Content-Type': 'application/json' }
}

export const contactInfo = {
  email: 'samueltambz27@gmail.com',
  phone: '+62 896-56526-6543',
  whatsapp: '62896565266543',
  whatsappUrl: 'https://wa.me/62896565266543',
  linkedin: 'https://www.linkedin.com/in/samuel-tambunan-1072542a5',
  github: ''
}
