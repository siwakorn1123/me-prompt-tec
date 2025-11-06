/**
 * Homepage
 * ME PROMPT TECHNOLOGY
 */

import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              มีพร้อมเทคโนโลยี
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              ME PROMPT TECHNOLOGY
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              สร้างสรรค์โซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจและพัฒนาคนรุ่นใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                ดูผลงานของเรา
              </Link>
              <Link
                href="/internship"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white/20"
              >
                ร่วมงานกับเรา
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              บริการของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เราให้บริการด้านเทคโนโลยีครบวงจร ตั้งแต่การพัฒนาซอฟต์แวร์ไปจนถึงการให้คำปรึกษา
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Web & Mobile Development
              </h3>
              <p className="text-gray-600">
                พัฒนาเว็บและแอปพลิเคชันที่ทันสมัย ตอบโจทย์ทุกธุรกิจ ด้วยเทคโนโลยีล่าสุด
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI & Automation
              </h3>
              <p className="text-gray-600">
                นำ AI และระบบอัตโนมัติมาเพิ่มประสิทธิภาพองค์กร ลดต้นทุน เพิ่มความแม่นยำ
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consulting & Training
              </h3>
              <p className="text-gray-600">
                ให้คำปรึกษาและอบรมทีมงานด้านเทคโนโลยี พัฒนาศักยภาพองค์กร
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ผลงานของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ชมตัวอย่างผลงานที่เราได้พัฒนาให้กับลูกค้าหลากหลายธุรกิจ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">MongoDB</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Project Title {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    รายละเอียดโปรเจกต์ที่น่าสนใจและตอบโจทย์ลูกค้าได้ดี
                  </p>
                  <Link href="/portfolio" className="text-blue-600 font-semibold hover:text-blue-700">
                    ดูรายละเอียด →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ดูผลงานทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Internship CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            เข้าร่วมทีมกับเรา
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            เปิดรับนักศึกษาฝึกงาน/สหกิจศึกษา ร่วมทำโปรเจกต์จริง เรียนรู้จากผู้เชี่ยวชาญ
            พัฒนาทักษะเพื่ออนาคตในอุตสาหกรรมเทคโนโลยี
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'โปรเจกต์จริง', icon: '💼' },
              { label: 'เทคโนโลยีล่าสุด', icon: '🚀' },
              { label: 'ทีมมืออาชีพ', icon: '👥' },
              { label: 'ประสบการณ์', icon: '⭐' },
            ].map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="font-semibold">{benefit.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/internship"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            ดูข้อมูลโปรแกรมฝึกงาน
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ความร่วมมือกับสถาบันการศึกษา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เราภูมิใจที่ได้เป็นส่วนหนึ่งในการผลิตบุคลากรด้านเทคโนโลยี
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">University {partner}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              ดูความร่วมมือทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            ติดต่อเราวันนี้เพื่อปรึกษาโครงการและรับคำแนะนำฟรี
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </Layout>
  );
}
