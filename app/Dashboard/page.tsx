import Card from "@/component/Card"

export default function Page() {
  return (
    <div className="space-y-8">
      {/* Title section */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          What would you like to automate?
        </h1>
        <div className="mt-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter an idea or app name to get started"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>
      </div>

      {/* Quick options */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600">
        <span>📈 Lead management</span>
        <span>💬 Customer support</span>
        <span>📊 Marketing & growth</span>
        <span>📁 Project management</span>
      </div>

      {/* Start from scratch */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Start from scratch</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="⚡ Zap" description="Automated workflows" />
          <Card title="📋 Table" description="Automated data" />
          <Card title="🧩 Interface" description="Apps, forms, and pages" />
          <Card title="🤖 Chatbot" description="AI-powered chatbot" />
        </div>
      </section>

      {/* Unfinished Zaps */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Unfinished Zaps</h2>
        <div className="bg-white border rounded-xl p-6 text-gray-500 text-sm">
          You don’t have any unfinished Zaps yet.
        </div>
      </section>
    </div>
  )
}
