export default function Page() {
  const faqs = [
    {
      q: 'Which SMS providers are supported?',
      a: 'The plugin integrates with Twilio and Vonage out of the box. Enter your API credentials in the admin dashboard and you are ready to go.'
    },
    {
      q: 'How does cart abandonment detection work?',
      a: 'A lightweight WooCommerce hook captures cart data when a session goes idle. You configure the delay (e.g. 15 minutes) before the recovery SMS fires.'
    },
    {
      q: 'Can I include a discount code in the SMS?',
      a: 'Yes. The React admin dashboard lets you create coupon codes that are automatically appended to each recovery message to incentivize return visits.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          WooCommerce Plugin
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Recover Abandoned Carts<br />
          <span className="text-[#58a6ff]">with Automated SMS</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically send personalized SMS messages to shoppers who leave without buying.
          Set custom timing, include discount codes, and watch revenue come back on autopilot.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Works with Twilio &amp; Vonage · Cancel anytime</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-center">
          {['Auto cart detection','Custom send delay','Discount codes','Twilio & Vonage','React admin dashboard','Campaign analytics'].map(f => (
            <li key={f} className="rounded-lg bg-[#161b22] border border-[#30363d] px-4 py-3 text-[#c9d1d9]">{f}</li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Single Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'WordPress plugin download',
              'Unlimited abandoned cart SMS',
              'Twilio & Vonage integration',
              'Discount code automation',
              'React admin dashboard',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} SMS Cart Recovery. All rights reserved.
      </footer>
    </main>
  )
}
