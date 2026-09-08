import Head from 'next/head';
import Link from 'next/link';

export default function GoldEcosystem() {
  const data = [
    { name: "نقاش", category: "پلتفرم", desc: "پلتفرم آنلاین آموزش طراحی، نقاشی و هنرهای تجسمی", status: "نوپا", icon: "🎨", glow: "shadow-purple-500/30 bg-purple-500/10" },
    { name: "ملی کند", category: "عرضه و فروش", desc: "پلتفرم خرید و فروش مستقیم طلا در سراسر کشور", status: "در حال رشد", icon: "🏆", glow: "shadow-gold/30 bg-gold/10" },
    { name: "گلدگاه", category: "مرکز نوآوری", desc: "شتابدهنده تخصصی کسب‌وکارهای نوپا در حوزه طلا و جواهر", status: "تثبیت شده", icon: "💎", glow: "shadow-blue-500/30 bg-blue-500/10" },
    { name: "زبان", category: "پلتفرم", desc: "پلتفرم آموزش زبان‌های خارجی با تمرکز بر مهارت‌های گفتاری", status: "در حال رشد", icon: "🗣️", glow: "shadow-green-500/30 bg-green-500/10" },
    { name: "طلایی", category: "پلتفرم", desc: "سامانه خرید و فروش آنلاین طلا و سرمایه‌گذاری مطمئن", status: "تثبیت شده", icon: "🪙", glow: "shadow-yellow-500/30 bg-yellow-500/10" },
    { name: "مک گلد", category: "مرکز نوآوری", desc: "مرکز نوآوری و شتابدهی تخصصی در حوزه طلا و جواهر", status: "نوپا", icon: "🧪", glow: "shadow-pink-500/30 bg-pink-500/10" },
    { name: "دربار", category: "پلتفرم", desc: "سامانه مدیریت معاملات طلا، جواهر و ارزهای دیجیتال", status: "نوپا", icon: "⚖️", glow: "shadow-red-500/30 bg-red-500/10" },
    { name: "و گلد", category: "پلتفرم", desc: "سامانه تخصصی پرداخت و خریدوفروش طلای آب‌شده", status: "در حال رشد", icon: "💳", glow: "shadow-cyan-500/30 bg-cyan-500/10" },
    { name: "بازار طلا", category: "بازارگاه آنلاین", desc: "بازار جامع خرید و فروش انواع طلا و جواهرات", status: "تثبیت شده", icon: "🛒", glow: "shadow-orange-500/30 bg-orange-500/10" },
    { name: "اینگراف", category: "مرکز نوآوری", desc: "مرکز نوآوری و رشد کسب‌وکارهای ایده‌محور", status: "تثبیت شده", icon: "📈", glow: "shadow-indigo-500/30 bg-indigo-500/10" },
    { name: "نیلو", category: "مرکز نوآوری", desc: "مرکز نوآوری صنایع خلاق و کسب‌وکارهای نوپا", status: "نوپا", icon: "🌱", glow: "shadow-green-500/30 bg-green-500/10" },
    { name: "خدابخش", category: "پلتفرم", desc: "پلتفرم آموزشی و فرهنگی با تمرکز بر تعامل و یادگیری", status: "در حال رشد", icon: "📚", glow: "shadow-purple-500/30 bg-purple-500/10" },
    { name: "نور", category: "پلتفرم", desc: "پلتفرم آنلاین آموزش نور و انرژی در محیط کار", status: "نوپا", icon: "💡", glow: "shadow-yellow-500/30 bg-yellow-500/10" },
    { name: "زیباسین", category: "مرکز نوآوری", desc: "مرکز نوآوری و پردازش تصویر با رویکرد هوش مصنوعی", status: "در حال رشد", icon: "🔬", glow: "shadow-blue-500/30 bg-blue-500/10" },
    { name: "همیار گلد", category: "مرکز نوآوری", desc: "مرکز نوآوری آموزش مهارت‌های دیجیتال و تجارت الکترونیک", status: "در حال رشد", icon: "🤝", glow: "shadow-teal-500/30 bg-teal-500/10" },
    { name: "قدرت دانش", category: "پلتفرم", desc: "پلتفرم آموزش و کارآفرینی با تمرکز بر کشاورزی", status: "تثبیت شده", icon: "🌾", glow: "shadow-lime-500/30 bg-lime-500/10" },
    { name: "مفاهیم", category: "پلتفرم", desc: "پلتفرم آموزش مدیریت و تحلیل کسب‌وکار", status: "در حال رشد", icon: "📊", glow: "shadow-emerald-500/30 bg-emerald-500/10" },
    { name: "تندیس", category: "آموزشگاه", desc: "مرکز تخصصی آموزش طراحی و مجسمه‌سازی", status: "تثبیت شده", icon: "🗿", glow: "shadow-stone-500/30 bg-stone-500/10" },
    { name: "طلایی", category: "پلتفرم", desc: "پلتفرم تخصصی آموزش طراحی و ارزهای دیجیتال", status: "تثبیت شده", icon: "🔗", glow: "shadow-amber-500/30 bg-amber-500/10" },
    { name: "ایمون (سگلر)", category: "پلتفرم", desc: "پلتفرم بازاریابی و برندینگ نوین در حوزه سلامت", status: "در حال رشد", icon: "🛡️", glow: "shadow-fuchsia-500/30 bg-fuchsia-500/10" }
  ];

  const filters = ["همه", "نوپا", "در حال رشد", "تثبیت شده", "متوقف"];

  return (
    <>
      <Head>
        <title>گالری اکوسیستم طلا | پل اطلس</title>
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden" dir="rtl">
        
        {/* پس‌زمینه هنری */}
        <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[200px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[200px] opacity-10"></div>

        {/* هدر */}
        <header className="relative z-20 container mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-600 rounded-full flex items-center justify-center text-3xl font-black shadow-[0_0_30px_rgba(255,215,0,0.4)] animate-pulse-glow">
              ط
            </div>
            <div>
              <h1 className="text-2xl font-black">اکوسیستم طلا</h1>
              <p className="text-xs text-gold tracking-widest">GOLD ECOSYSTEM</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-gold transition">خانه</Link>
            <a href="#" className="text-gold font-bold">اکوسیستم طلا</a>
          </nav>
        </header>

        {/* عنوان */}
        <main className="relative z-10 container mx-auto px-6 pt-16 pb-24">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-3xl"></div>
              <span className="glass px-8 py-3 rounded-full text-xs font-bold tracking-widest text-gold">✦ گالری هنری داده‌ها ✦</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              نقشه <span className="text-neon-gradient">اکوسیستم طلا</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              هر کارت، یک اثر هنری از یک کسب‌وکار نوآور است.
            </p>
          </div>

          {/* جستجو و فیلترها */}
          <div className="glass rounded-[3rem] p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold rounded-full blur-[80px] opacity-10"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
              <input 
                type="text" 
                placeholder="جستجو در گالری..." 
                className="w-full md:w-1/2 bg-transparent border-b-2 border-white/10 focus:border-gold transition-all py-4 text-lg placeholder-gray-500 outline-none"
              />
              <div className="flex flex-wrap gap-3">
                {filters.map((filter, idx) => (
                  <button 
                    key={idx} 
                    className={`px-6 py-3 rounded-full text-sm font-bold border-2 transition-all ${
                      idx === 0 
                        ? 'bg-gold text-black border-gold shadow-[0_0_20px_rgba(255,215,0,0.4)]' 
                        : 'border-white/10 text-gray-300 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* کارت‌های سه‌بعدی هنری */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data.map((item, index) => (
              <div key={index} className="group relative perspective-1000">
                <div className={`relative glass rounded-[2.5rem] p-8 h-full overflow-hidden transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105 group-hover:shadow-2xl ${item.glow}`}>
                  
                  {/* هاله نوری */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-all duration-700 bg-gradient-to-br from-white to-transparent`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-5xl shadow-2xl ${item.glow}`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-3xl font-black text-gold">{item.status === "تثبیت شده" ? "✓" : "◌"}</div>
                        <span className="text-xs text-gray-400">{item.status}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4">{item.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-xs text-gold font-bold">{item.category}</span>
                      <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 group-hover:rotate-45">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
