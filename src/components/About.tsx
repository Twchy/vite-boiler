import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Info,
  Download,
  Play,
  Settings,
  CheckCircle,
  Terminal,
  Folder,
  Zap,
  Shield,
  Palette,
  Code,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-12 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <header className="text-center mb-16">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24  opacity-20 animate-pulse"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-xl">
                  <Info className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
              About This Boilerplate
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A carefully crafted React boilerplate designed to accelerate your
              development process with modern tools, best practices, and
              beautiful design.
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why This Boilerplate?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Starting a new React project shouldn't take hours of
                    configuration. This boilerplate eliminates the setup
                    friction and gets you coding immediately.
                  </p>
                  <p>
                    Built with production-ready tools and modern development
                    practices, it's perfect for everything from prototypes to
                    enterprise applications.
                  </p>
                  <p>
                    Every dependency is carefully chosen, every configuration is
                    optimized, and every pattern follows current best practices.
                  </p>
                </div>
              </div>

              {/* Getting Started Steps */}
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Start
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Download,
                      text: "Clone or download this boilerplate",
                      command: "git clone github.com/twchy/vite-boiler",
                    },
                    {
                      icon: Terminal,
                      text: "Install dependencies",
                      command: "npm install",
                    },
                    {
                      icon: Play,
                      text: "Start development server",
                      command: "npm run dev",
                    },
                    {
                      icon: Settings,
                      text: "Begin customizing for your project",
                      command: "Ready to code!",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-lg"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-1">
                          {step.text}
                        </p>
                        <code className="text-sm bg-gray-100 px-3 py-1 rounded text-gray-700 font-mono">
                          {step.command}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Tech Stack */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tech Stack
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Code,
                      name: "React 18",
                      desc: "React with hooks and concurrent features",
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      icon: Shield,
                      name: "TypeScript",
                      desc: "Type-safe JavaScript development",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: Zap,
                      name: "Vite",
                      desc: "Lightning-fast build tool and dev server",
                      color: "from-yellow-400 to-orange-500",
                    },
                    {
                      icon: Palette,
                      name: "Tailwind CSS",
                      desc: "Utility-first CSS framework",
                      color: "from-teal-400 to-cyan-500",
                    },
                    {
                      icon: Folder,
                      name: "React Router",
                      desc: "Declarative client-side routing",
                      color: "from-red-400 to-pink-500",
                    },
                    {
                      icon: Sparkles,
                      name: "Lucide React",
                      desc: "Beautiful, customizable icons",
                      color: "from-purple-500 to-indigo-500",
                    },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-lg hover:bg-white/80 transition-colors"
                    >
                      <div
                        className={`bg-gradient-to-r ${tech.color} p-2 rounded-lg`}
                      >
                        <tech.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-gray-600">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Production Ready",
                  desc: "Optimized builds with code splitting and tree shaking",
                },
                {
                  icon: Settings,
                  title: "Pre-configured Tools",
                  desc: "ESLint, TypeScript, and modern tooling setup",
                },
                {
                  icon: Zap,
                  title: "Fast Development",
                  desc: "Hot reload, instant builds, and great DX",
                },
                {
                  icon: Palette,
                  title: "Beautiful Design",
                  desc: "Modern UI components and design system",
                },
                {
                  icon: Shield,
                  title: "Type Safety",
                  desc: "Full TypeScript support with strict configuration",
                },
                {
                  icon: CheckCircle,
                  title: "Best Practices",
                  desc: "Following React and industry standards",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white transition-all duration-200 hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Command Reference */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6" />
              Available Commands
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  cmd: "npm run dev",
                  desc: "Start development server with hot reload",
                },
                {
                  cmd: "npm run build",
                  desc: "Build for production with optimizations",
                },
                {
                  cmd: "npm run preview",
                  desc: "Preview production build locally",
                },
                {
                  cmd: "npm run lint",
                  desc: "Run ESLint to check code quality",
                },
              ].map((command, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <code className="text-green-400 font-mono text-sm">
                    {command.cmd}
                  </code>
                  <p className="text-gray-300 text-sm mt-1">{command.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0 bg-white/5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3ccircle cx='30' cy='30' r='4' fill='%23ffffff' fill-opacity='0.3'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                This boilerplate gives you everything you need to create amazing
                React applications
              </p>
              <Link
                to="/"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
