import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  Palette,
  Code,
  Rocket,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <header className="text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32  opacity-20 animate-pulse"></div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl">
                <Code className="text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full w-fit mx-auto">
              <Sparkles className="w-4 h-4" />
              Modern React Boilerplate
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Build Amazing Apps
              <br />
              <span className="text-blue-600">Lightning Fast</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A production-ready React boilerplate with TypeScript, Vite, and
              Tailwind CSS. Everything you need to ship your next project
              quickly and efficiently.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              to="/about"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://github.com"
              className="group flex items-center gap-2 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 hover:border-gray-300 bg-white/50 backdrop-blur-sm transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl w-fit mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built with Vite for instant hot reload and optimized builds.
              Experience the fastest development workflow.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl w-fit mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Type Safe</h3>
            <p className="text-gray-600 leading-relaxed">
              Full TypeScript support with strict configuration. Catch errors
              early and build with confidence.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Beautiful Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tailwind CSS with custom design system and Inter font. Create
              stunning UIs with utility-first approach.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl w-fit mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Developer Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ESLint, Prettier, and modern tooling configured. Focus on
              building, not configuration.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-xl w-fit mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Production Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Optimized builds, code splitting, and tree shaking. Deploy with
              confidence to any platform.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-rose-500 to-red-500 p-3 rounded-xl w-fit mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Modern Stack
            </h3>
            <p className="text-gray-600 leading-relaxed">
              React 18, React Router, Lucide icons, and latest web standards.
              Build for the future.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Powered by Modern Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              React 18
            </span>
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              TypeScript
            </span>
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              Vite
            </span>
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              Tailwind CSS
            </span>
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              ESLint
            </span>
            <span className="bg-white/70 px-4 py-2 rounded-lg border">
              React Router
            </span>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your next project with this modern React boilerplate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
