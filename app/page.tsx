"use client"

import { useState, useRef, useEffect } from "react"

export default function Page() {
  const [started, setStarted] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [openLetter, setOpenLetter] = useState(false)
  const [hearts, setHearts] = useState<number[]>([])
  useEffect(() => {
  const interval = setInterval(() => {
    setHearts((prev) => [...prev, Date.now()])

    setTimeout(() => {
      setHearts((prev) => prev.slice(1))
    }, 4000)
  }, 800)

  return () => clearInterval(interval)
}, [])
  const [showFinal, setShowFinal] = useState(false)
  const [selectedMemory, setSelectedMemory] = useState(null)
  const audioRef = useRef(null)


  const checkPassword = () => {
    if (password === "6122025") {
      setUnlocked(true)
    } else {
      alert("الباسورد غلط 😭")
    }
  }

  if (!started) {
    return (
    
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold">
            For Shehab ✨
          </h1>

          <p className="text-zinc-300 leading-8">
            يمكن أنت فاكر إننا معملناش ذكريات كتير هنا…
            <br />
            بس الحقيقة إن كل لحظة صغيرة معاك كانت ذكرى بالنسبة ليا 🤍
          </p>

          <button
            onClick={() => {
           setStarted(true)
          audioRef.current?.play()
           }}
            className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-all"
          >
            ابدأ الذكريات 💖
          </button>
        </div>
      </div>
    )
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-3xl text-center">

          <h2 className="text-3xl mb-6">
            Password 🔐
          </h2>

          <input
            type="password"
            className="p-3 rounded-xl text-white bg-zinc-800 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={checkPassword}
            className="block mt-4 px-6 py-3 bg-white text-black rounded-xl mx-auto"
          >
            دخول
          </button>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-10 text-center">
      <audio autoPlay loop>
  <source src="/music/song.mp3" type="audio/mp3" />
</audio>
      <h1 className="text-5xl mb-6">
        Our Memories 🤍
      </h1>

      <p className="text-zinc-400 mb-12 leading-8">
        يمكن أنت قولت إنك معملتش ذكريات حلوة هنا…
        <br />
        بس أنا جمعت كل لحظة حلوة بينا علشان أقولك إنك كنت حياتي في كل التفاصيل دي ✨
      </p>

      <div
        onClick={() => setOpenLetter(true)}
        className="cursor-pointer bg-zinc-900 p-8 rounded-3xl mb-14 hover:scale-105 transition-all duration-500"
      >
        ✉️ افتح الرسالة
      </div>

      {openLetter && (
        <div className="bg-zinc-900 p-8 rounded-3xl mb-14 leading-8 text-zinc-300">
          حبيت أعمل حاجة تكون بتاعتي وبتاعتك كده…
          <br /><br />

          كل ذكرى حلوة بينا عمرى ما هنساها علشان حرفيًا دول بالنسبة ليا حياتى 🤍
          <br /><br />

          وجودك فى حياتى كان أكتر حاجة ناقصانى…
          <br />
          ووجودك فى حياة أى حد نعمة فعلًا ✨
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
          <img
            src="/images/image.jpg"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-6">
            <p className="text-2xl mb-4">
              🤍 حتى التعب كان حلو
            </p>

            <p className="text-zinc-400 leading-8">
              أنا بحب الاتحاد أوي… لكن وإحنا فيه سوا كنت بحبه أكتر علشان أنت موجود.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
          <img
            src="/images/image1.jpg"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-6">
            <p className="text-2xl mb-4">
              🌙 أول مرة أبقى مطمنة
            </p>

            <p className="text-zinc-400 leading-8">
             يومها كنت لأول مرة مش خايفة… وجودك كان مطمني في كل حاجة مكنتش شايلة هم اى حاجة كنت عايوة افضل بستمتع بس اننا سوى 
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
          <img
            src="/images/image2.jpg"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-6">
            <p className="text-2xl mb-4">
              🎠 ضحك من القلب
            </p>

            <p className="text-zinc-400 leading-8">
              وقتها مكنتش فاكرة أي حاجة في الدنيا غير إننا سوا وبنضحك.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">

          <video
            controls
            className="w-full h-[450px] object-cover"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>

          <div className="p-6">
            <p className="text-2xl mb-4">
              😂 بحب ضحكتك
            </p>

            <p className="text-zinc-400 leading-8">
              حتى رخامتك وهزارك بحبهم.
            </p>
          </div>

        </div>

      </div>
      <div className="mt-16 grid md:grid-cols-2 gap-8">

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img
      src="/images/image5.jpg"
      className="w-full h-[450px] object-cover"
    />

    <div className="p-6">
      <p className="text-2xl mb-4">
        🏆 فخورة بيك
      </p>

      <p className="text-zinc-400 leading-8">
       يومها و انت بتتكرم و بتاخد الدرع انا كنت فى قمة سعادتى كنت عايزاك انك تبقى كده انت الوحيد اللى فى كل اللى اتكرموا واخد درع و مميز عن الكل حتى انا علشان تكريمك و نجاحك فى اى شىء هو حلمى اصلا هو اكتر شىء بيفرحنى جريت يومها علشان اصورك اول واحده فيهم و انت بتتكرم و مستنيا يوم تخرجك علشان بردو اجى و اصورك و اشوفك و انت بتتخرج و كل مرة بتنجح و بتعمل حاجة جديدة هبقى مستنياها علشان احضرها و اصورك و افرح ب نجاحك وقتها
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img
      src="/images/image12.jpg"
      className="w-full h-[450px] object-cover"
    />

    <div className="p-6">
      <p className="text-2xl mb-4">
        🎂 أسعد عيد ميلاد
      </p>

      <p className="text-zinc-400 leading-8">
       يوم عيد ميلادى ده كان اسعد عيد ميلاد عدى عليا فى حياتى عرفت اواى تخليه يوم افضل فاكراه طول عمرى بجد كنت قاعدة وقتها مستنيا اللحظة اللى كلو هيمشى فيها علشان نقعد انا و انت و بس عمرى ما هنسى رغينا يومها و لا حتى الشوارع اللى لفينا فيها و لا قصص خالك اللى فضلت تحكيهالى طول الطريق كنت يومها طايرة كنت اول مره احس انى كاملة مش عايزة اى حاجة و احنا سوى مكنتش برد على حد حتى مكنتش ماسكة فونى علشان اللى بمسك فونى علشانه هو معايا اوردى
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">

    <video
      controls
      className="w-full h-[450px] object-cover"
    >
      <source src="/videos/video1.mp4" type="video/mp4" />
    </video>

    <div className="p-6">
      <p className="text-2xl mb-4">
        ✨ 
      </p>

      <p className="text-zinc-400 leading-8">
        كنت مبسوطة جدًا وأنا شايفاك واقف تعلم الكل بثقة.
      </p>
    </div>

  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img
      src="/images/image22.jpg"
      className="w-full h-[450px] object-cover"
    />

    <div className="p-6">
      <p className="text-2xl mb-4">
        💐 البوكيه المفضل
      </p>

      <p className="text-zinc-400 leading-8">
        لحد دلوقتي محتفظة بيه زي ما هو… علشان الذكرى دي عندي كبيرة جدًا.
      </p>
    </div>
  </div>

</div>
<div className="mt-16 grid md:grid-cols-2 gap-8">

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image6.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🧇 أول مرة أطلب منك حاجة</p>
      <p className="text-zinc-400 leading-8">
        يومها كنت مبسوطة جدًا… حسيت إنك الشخص اللي أقدر أطلب منه أي حاجة من غير خوف.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image7.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🐈 حتى القطة ارتاحتلك</p>
      <p className="text-zinc-400 leading-8">
        وقتها اتبسطت أوي… حتى القطة الصغيرة ارتاحت وهي معاك.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image8.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🌙 بعد تعب رمضان</p>
      <p className="text-zinc-400 leading-8">
        اليوم ده كان أول لحظة نحس فيها بالراحة بعد تعب أسبوع كامل.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image9.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">💔 حتى أيام الزعل بحبها معاك</p>
      <p className="text-zinc-400 leading-8">
       يومها خرجت اصورك و انت بتشتغل علشان تبقى ذكره زى ما بعمل دايما و لكن وقتها احنا كنا متخانقين فترة الزينة دى كانت اصعب فترة عديت عليا و احنا سوى كنت مدمرة فيها بمعنى الكلمة مكنتش مدركة انه لمجرد اننا مش حلوين سوى انا هبقى كده انا كنت بروح اطحن نفسى معاهم علشان مفكرش كنا بنروح انا بنام و انت مكنتش بتكلمنى عرفت مؤخرا انها كانت فترة وحشة علشان ريتاج و مش قادرة اتخطى انى كنت جنبك وقت ما جت تكلمك و لكن بحمد ربنا انى كنت جنبك علشان تحس انى جنبك حتى لو مش واخده بالى ادركت حتى الفترة دى انك حتى و انت مش كويس انا عايزك و مش عايزة غيرك و لا هبقى مرتاحة الا معاك كانت فترة وحشة و لكن حتى دى معاك انت بالذات انا بحبها و ان وجودك حتى و احنا مش كويسين بيقويني .
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image10.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🎡 افتكرت كلمة صغيرة قولتها</p>
      <p className="text-zinc-400 leading-8">
        فرحت جدًا إنك افتكرت تفصيلة صغيرة قولتها عن الملاهي.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image13.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🍫 شوكولاتة بهزار… وفرحة بجد</p>
      <p className="text-zinc-400 leading-8">
        كنت مروحة مبسوطة جدًا إنك صدقت هزارى وجبتلي شوكولاتة.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image14.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">✨ اخترتني أكون معاك</p>
      <p className="text-zinc-400 leading-8">
        كنت مبسوطة إنك اخترتني أنا اللي أكون معاك اليوم ده.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image15.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🫶 صنعنا اليوم ده سوا</p>
      <p className="text-zinc-400 leading-8">
       يوم الطالب المثالى اليوم ده احنا عملنا كل حاجة للايفينت ده من تولها ل اخرها سوى مش هنسى المفرش اللى كلو اتريق عليه علشان جبناه سوى و لا عمو بتاع المفارش اللى قالنا عقبال ما تيجو سوى تجيبو حاجاتكم من عندى و لا عصير القصب اللى شربناه سوى و لا الحكاوى من اول قصة باباك و مامتك و اتعرفوا على بعض ازاى لحد و احنا مروحبن لما حكيتلى عن صاحبك اسماعيل و قد ايه كنت مبسوطة بيك يومها
      </p>
    </div>
  </div>

</div>
<div className="mt-16 grid md:grid-cols-2 gap-8">

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image16.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">☕ قهوة وسط</p>
      <p className="text-zinc-400 leading-8">
        حتى وسط اللخبطة افتكرت تجيبلي قهوة علشان أفوق.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image17.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🏅 نجاحك</p>
      <p className="text-zinc-400 leading-8">
       يومها حكيتلى قد ايه انت تعبت علشان التحاد و قد ايه هو اصلا مكانش فيه اتحاد و انك انت اللى عملته كنت مبسوطة ب نجاحك  و انه قد ايه انت تعبت علشان تعمل ده و توصل لحد اللحظة دى و ان مليون واحد بيتمنى بس يكلمك و يعرفك كنت اول مرة احس انه فى حد نجاحه بالنسبة ليا نجاحى بيكون عنجى استعداد اقعد سنين بسمعك بس و انتت بتتكلم عن حاجات عملتها و نجحت او حاجات وصلت ليها يارب اشوفك دايما ناجح و افضل افتخر بيك
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image18.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">📸 لحظة شغل</p>
      <p className="text-zinc-400 leading-8">
        زي عادتي كنت بصورك وأنت بتشتغل علشان تفضل ذكرى.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image19.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">🤝 Sponsors</p>
      <p className="text-zinc-400 leading-8">
        أول مرة أروح معاك كانت لحظة فرح كبيرة بالنسبالي.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image20.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">✨ أي حاجة معاك حلوة</p>
      <p className="text-zinc-400 leading-8">
       
صورتها يومها علشان افتكرتك اول ما شوفتها و ضحكت كنت حتى الحاجات اللى مش حلوة انت محليها و مخليها حلوة انت حتى مخليني انا نفسى حلوة علشان انت فى حياتى
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image21.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">💝 أول هدية</p>
      <p className="text-zinc-400 leading-8">
        أول حاجة جيبتها منك كانت عندي أهم من أي حاجة.
      </p>
    </div>
  </div>

  <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
    <img src="/images/image55.jpg" className="w-full h-[450px] object-cover" />
    <div className="p-6">
      <p className="text-2xl mb-4">💖 يوم حلو</p>
      <p className="text-zinc-400 leading-8">
        يوم بسيط بس بالنسبالي كان مهم علشان كنت مبسوطة بيك بجد من قلبى 
      </p>
    </div>
  </div>


</div>
<div className="mt-20 text-center">

  {!showFinal ? (
    <button
      onClick={() => setShowFinal(true)}
      className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-all"
    >
      💌 افتح الرسالة الأخيرة
    </button>
  ) : (
    <div className="bg-gradient-to-b from-zinc-900 to-black p-10 rounded-3xl mt-8 text-zinc-300 leading-8">

      انت قولت انك مش بتحب شبين علشان معملتش فيها اى ذكريات حلوه

      <br /><br />

      لكن انا عملت كل دول معاك…
      <br />
      دول بالنسبة ليا حياتي حرفيًا 🤍

      <br /><br />

      كل لحظة حلوة بينا كانت نعمة من ربنا،
      وبتمنى تدوم وتكبر متخلصش أبدًا ✨

    </div>
  )}

</div>

    </div>
  )
}