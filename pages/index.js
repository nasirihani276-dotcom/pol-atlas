import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>پل اطلس | هنر داده‌های اقتصاد دیجیتال</title>
        <meta name="description" content="پلتفرم هنری و تحلیلی اقتصاد دیجیتال ایران" />
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden">
        
        {/* لایه‌های پس‌زمینه گرافیکی */}
        <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
        
        {/* ذرات معلق (Particles) */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full particle animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gold rounded-full particle animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-neon rounded-full particle animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        {/* هاله‌های نوری بزرگ */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[200px] opacity-10"></div>

        {/* هندسه سه‌بعدی چرخان (توپ طلایی) */}
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border-2 border-dashed border-gold/30 animate-spin-slow z-0"></div>
        <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gold/20 to-transparent backdrop-blur-xl animate-float-slow z-0"></div>

        {/* هدر هنری */}
        <header className="relative z-20 container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-600 rounded-full flex items-center justify-center text-3xl font-black shadow-[0_0_30px_rgba(255,215,0,0.4)] animate-pulse-glow">
              پ
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">پل اطلس</h1>
              <p className="text-xs text-gold tracking-widest">POL ATLAS</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-gold transition relative group">
              خانه
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/gold-ecosystem" className="hover:text-gold transition relative group">
              اکوسیستم طلا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <button className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-sheen"></span>
            ورود
          </button>
        </header>

        {/* بخش اصلی با افکت هنری */}
        <main className="relative z-10 container mx-auto px-6 pt-32 pb-32 text-center">
          <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            
            {/* حلقه نئونی بالای تیتر */}
            <div className="relative inline-block mb-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-3xl"></div>
              <span className="glass px-8 py-3 rounded-full text-xs font-bold tracking-widest text-accent inline-block">
                ✦ نسل جدید تحلیل داده ✦
              </span>
            </div>

            <h2 className="text-6xl md:text-9xl font-black leading-none mb-10">
              <span className="block">آینده را</span>
              <span className="text-neon-gradient block mt-4">لمس کنید</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              ما هنر را با داده‌های زنده ترکیب می‌کنیم تا اکوسیستم اقتصاد دیجیتال ایران را به یک تجربه بصری خیره‌کننده تبدیل کنیم.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Link href="/gold-ecosystem" className="relative group px-14 py-6 rounded-3xl font-black text-2xl bg-gradient-to-r from-primary to-accent overflow-hidden shadow-2xl">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-sheen"></span>
                <span className="relative z-10">اکوسیستم طلا ✦</span>
              </Link>
              <button className="relative px-14 py-6 rounded-3xl font-black text-2xl glass border-2 border-gold/30 hover:border-gold transition-all group">
                <span className="text-gold group-hover:scale-110 transition inline-block">گزارش هنری</span>
              </button>
            </div>
          </div>
        </main>

        {/* کارت‌های داده با طراحی اربیتال (مدار) */}
        <section className="relative z-10 container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "داده‌های زنده", value: "+۱۲,۵۰۰", desc: "نقطه داده فعال", icon: "🛰️", color: "text-accent", border: "border-accent/30" },
              { title: "تحلیل هوشمند", value: "۹۸٪", desc: "دقت پیش‌بینی", icon: "🧠", color: "text-neon", border: "border-neon/30" },
              { title: "پشتیبانی ۲۴/۷", value: "سریع", desc: "پاسخ‌گویی آنی", icon: "⚡", color: "text-gold", border: "border-gold/30" }
            ].map((item, index) => (
              <div key={index} className={`relative glass rounded-[2.5rem] p-12 border ${item.border} overflow-hidden group hover:-translate-y-4 transition-all duration-700`}>
                {/* دایره اربیتال چرخان */}
                <div className="absolute -top-20 -right-20 w-40 h-40 border border-white/10 rounded-full animate-spin-slow"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                
                <div className="text-6xl mb-8 animate-float-slow">{item.icon}</div>
                <div className={`text-7xl font-black ${item.color} mb-4`}>{item.value}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                
                {/* خط نئونی زیر کارت */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100`}></div>
              </div>
            ))}
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/5 py-10 text-center text-sm text-gray-500">
          <div className="container mx-auto">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-gold font-bold">پل اطلس</span>
            </div>
            © ۲۰۲۶ - اثر هنری داده‌های ایران
          </div>
        </footer>
      </div>
    </>
  );
}
