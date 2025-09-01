"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2, Image as ImageIcon, Wand2, Sparkles, Zap, Eye } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/screens/Navbar";
import Footer from "@/components/screens/Footer";
import Logo from "@/components/Logo";

interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
  description?: string;
  requestId?: string;
  contentType?: string;
  fileName?: string;
  fileSize?: number;
}

export default function ComplyImageEditor() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Görsel boyut kontrolü (10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error(t.imageEditor.upload.errors?.sizeError || "File size must be smaller than 10MB.");
        return;
      }

      // Dosya türü kontrolü
      if (!file.type.startsWith("image/")) {
        toast.error(t.imageEditor.upload.errors?.typeError || "Please select a valid image file.");
        return;
      }

      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast.success(t.imageEditor.upload.success || "Image uploaded successfully!");
    }
  };

  const handleGenerateImage = async () => {
    if (!selectedImage || !prompt.trim()) {
      toast.error(t.imageEditor.generate.errors?.missingInput || "Please upload an image and enter a prompt.");
      return;
    }

    setIsGenerating(true);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("prompt", prompt);

    try {
      const response = await fetch("/api/image-editor", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.imageEditor.generate.errors?.generateError || "Error occurred while generating image.");
      }

      const newImage: GeneratedImage = {
        url: data.imageUrl,
        prompt: prompt,
        timestamp: data.timestamp || Date.now(),
        description: data.description,
        requestId: data.requestId,
        contentType: data.contentType,
        fileName: data.fileName,
        fileSize: data.fileSize,
      };

      setGeneratedImages((prev) => [newImage, ...prev]);
      toast.success(t.imageEditor.generate.success || "Image generated successfully!");
      setPrompt("");
    } catch (error) {
      console.error("Görsel üretme hatası:", error);
      toast.error(
        error instanceof Error ? error.message : t.imageEditor.generate.errors?.generateError || "Error occurred while generating image."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `comply-ai-edited-${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(t.imageEditor.results.actions.downloadSuccess);
    } catch (error) {
      console.error("İndirme hatası:", error);
      toast.error(t.imageEditor.results.actions.downloadError);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Light mode background */}
      <div 
        className="absolute inset-0 block dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(251, 191, 36, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.8) 0%,
              rgba(248, 250, 252, 0.9) 25%,
              rgba(241, 245, 249, 0.8) 50%,
              rgba(248, 250, 252, 0.9) 75%,
              rgba(255, 255, 255, 0.8) 100%)
          `
        }}
      />
      
      {/* Dark mode background */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.10) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(251, 191, 36, 0.10) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(15, 23, 42, 0.95) 0%,
              rgba(30, 41, 59, 0.98) 25%,
              rgba(51, 65, 85, 0.95) 50%,
              rgba(30, 41, 59, 0.98) 75%,
              rgba(15, 23, 42, 0.95) 100%)
          `
        }}
      />
      {/* Animated Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light mode glows */}
        <div className="block dark:hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '6s' }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '8s' }}
          />
          <div 
            className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-500/6 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '4s', animationDuration: '10s' }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Dark mode glows */}
        <div className="hidden dark:block">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '6s' }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '8s' }}
          />
          <div 
            className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '4s', animationDuration: '10s' }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo className="text-2xl" type="single" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {t.imageEditor.title}
              </span>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.imageEditor.subtitle.split(' ').slice(0, 2).join(' ')}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}{t.imageEditor.subtitle.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t.imageEditor.description}
          </motion.p>

          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20">
              <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm text-gray-800 dark:text-white font-medium">{t.imageEditor.features?.instant || "Instant Processing"}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20">
              <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-gray-800 dark:text-white font-medium">{t.imageEditor.features?.quality || "High Quality"}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20">
              <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-800 dark:text-white font-medium">{t.imageEditor.features?.aiPowered || "AI Powered"}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Editor Interface */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Upload & Controls Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <GlassCard variant="editor" className="p-8 h-fit bg-white/80 dark:bg-transparent" glowColor="rgba(59, 130, 246, 0.3)" animated={false}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-200 dark:border-white/20">
                  <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.imageEditor.upload.title}</h2>
              </div>
              
              {/* Upload Area */}
              <div className="mb-8">
                <div 
                  className="relative border-2 border-dashed border-gray-300 dark:border-white/30 rounded-2xl p-8 text-center hover:border-purple-500 dark:hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {previewUrl ? (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative inline-block">
                        <Image
                          src={previewUrl}
                          alt={t.imageEditor.upload.altText || "Uploaded image preview"}
                          width={200}
                          height={200}
                          className="mx-auto rounded-xl object-cover shadow-2xl"
                          priority={false}
                          onError={(e) => {
                            console.error("Preview image failed to load:", e);
                          }}
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-white/70">
{t.imageEditor.upload.changeImage}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      <motion.div
                        className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
{t.imageEditor.upload.dragDrop}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-white/60">
{t.imageEditor.upload.supportedFormats}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Prompt Area */}
              <div className="mb-8">
                <Label htmlFor="prompt" className="text-sm font-medium text-gray-900 dark:text-white/80 mb-2 block">
{t.imageEditor.prompt.title}
                </Label>
                <Textarea
                  id="prompt"
                  placeholder={t.imageEditor.prompt.placeholder}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="font-medium bg-white/60 dark:bg-white/10 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50"
                />
                <p className="text-xs text-gray-500 dark:text-white/50 mt-3 flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
{t.imageEditor.prompt.tips.items[2]}
                </p>
              </div>

              {/* Generate Button */}
              <LiquidButton
                onClick={handleGenerateImage}
                disabled={!selectedImage || !prompt.trim() || isGenerating}
                className="w-full text-blue-700 dark:text-purple-400 font-bold text-xl group relative overflow-hidden [&>div]:shadow-none [&>div]:border-0 [&>div]:outline-0 [&>div]:bg-blue-500/10 dark:[&>div]:bg-purple-500/10"
                size="xxl"
              >
                {/* Shimmer effect */}
                {!isGenerating && (
                  <div className="absolute inset-0 -top-2 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 transition-transform duration-1000 ease-out group-hover:translate-x-[200%]" />
                )}
                
                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      <span className="tracking-wide">{t.imageEditor.generate.generating}</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="tracking-wide">{t.imageEditor.generate.button}</span>
                    </>
                  )}
                </div>
              </LiquidButton>
            </GlassCard>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <GlassCard variant="editor" className="p-8 bg-white/80 dark:bg-transparent" glowColor="rgba(34, 197, 94, 0.3)" animated={false}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-gray-200 dark:border-white/20">
                  <Download className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.imageEditor.results.title}</h2>
                {generatedImages.length > 0 && (
                  <div className="ml-auto px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
{generatedImages.length} {t.imageEditor.results.count}
                    </span>
                  </div>
                )}
              </div>

              {/* AI Process Steps */}
              {(isGenerating || generatedImages.length > 0) && (
                <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/50">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                    <Wand2 className="h-5 w-5" />
{t.imageEditor.results.process.title}
                  </h3>
                  <div className="space-y-3">
                    <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${!isGenerating ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50' : 'bg-white/50 dark:bg-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${!isGenerating ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        {!isGenerating ? (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-xs font-bold text-white">1</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{t.imageEditor.results.process.steps.analysis.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t.imageEditor.results.process.steps.analysis.description}</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isGenerating ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50' : generatedImages.length > 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50' : 'bg-white/50 dark:bg-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${generatedImages.length > 0 ? 'bg-emerald-500' : isGenerating ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        {generatedImages.length > 0 ? (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : isGenerating ? (
                          <Loader2 className="w-4 h-4 text-white animate-spin" />
                        ) : (
                          <span className="text-xs font-bold text-white">2</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{t.imageEditor.results.process.steps.processing.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t.imageEditor.results.process.steps.processing.description}</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${generatedImages.length > 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50' : 'bg-white/50 dark:bg-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${generatedImages.length > 0 ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        {generatedImages.length > 0 ? (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-xs font-bold text-white">3</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{t.imageEditor.results.process.steps.ready.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t.imageEditor.results.process.steps.ready.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {generatedImages.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
{t.imageEditor.results.empty.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
{t.imageEditor.results.empty.description}
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar pr-2">
                  {generatedImages.map((image, index) => (
                    <motion.div
                      key={image.timestamp}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <GlassCard variant="subtle" className="p-6 bg-white/90 dark:bg-transparent" animated={false}>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Image Display */}
                          <div className="relative group">
                            <div className="aspect-square rounded-xl overflow-hidden bg-black/20">
                              <Image
                                src={image.url}
                                alt={image.prompt ? `${t.imageEditor.results.altText || "AI generated image"}: ${image.prompt}` : (t.imageEditor.results.altText || "AI generated image")}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                priority={false}
                                onError={(e) => {
                                  console.error("Generated image failed to load:", e);
                                }}
                              />
                            </div>

                          </div>

                          {/* Image Details */}
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                              <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
{t.imageEditor.results.details.prompt}
                              </h4>
                              <p className="text-gray-800 dark:text-white text-sm leading-relaxed">
                                &ldquo;{image.prompt}&rdquo;
                              </p>
                            </div>
                            
                            {image.description && (
                              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                                <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
{t.imageEditor.results.details.aiDescription}
                                </h4>
                                <p className="text-gray-800 dark:text-white/90 text-sm leading-relaxed">
                                  {image.description}
                                </p>
                              </div>
                            )}
                            
                            {image.requestId && (
                              <details className="text-xs">
                                <summary className="cursor-pointer text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
{t.imageEditor.results.details.technicalDetails}
                                </summary>
                                <div className="mt-3 p-3 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 space-y-2 text-gray-700 dark:text-white/70">
                                  <div><strong>{t.imageEditor.results.details.requestId}</strong> {image.requestId}</div>
                                  {image.contentType && <div><strong>{t.imageEditor.results.details.format}</strong> {image.contentType}</div>}
                                  {image.fileName && <div><strong>{t.imageEditor.results.details.file}</strong> {image.fileName}</div>}
                                  {image.fileSize && <div><strong>{t.imageEditor.results.details.size}</strong> {Math.round(image.fileSize / 1024)} KB</div>}
                                </div>
                              </details>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex gap-3">
                              <LiquidButton
                                onClick={() => handleDownloadImage(image.url, index)}
                                className="flex-1 text-emerald-700 dark:text-emerald-400 font-semibold group [&>div]:shadow-none [&>div]:border-0 [&>div]:outline-0 [&>div]:bg-emerald-500/10 dark:[&>div]:bg-emerald-500/10"
                                size="lg"
                              >
                                <Download className="h-4 w-4" />
{t.imageEditor.results.actions.download}
                              </LiquidButton>
                              <LiquidButton
                                onClick={() => {
                                  navigator.clipboard.writeText(image.url);
                                  toast.success(t.imageEditor.results.actions.copied);
                                }}
                                className="text-gray-700 dark:text-gray-400 font-semibold group [&>div]:shadow-none [&>div]:border-0 [&>div]:outline-0 [&>div]:bg-gray-500/10 dark:[&>div]:bg-gray-500/10"
                                size="lg"
                              >
{t.imageEditor.results.actions.copy}
                              </LiquidButton>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>

        {/* Usage Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <GlassCard variant="subtle" className="p-8 bg-white/85 dark:bg-transparent" glowColor="rgba(168, 85, 247, 0.2)" animated={false}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
💡 {t.imageEditor.tips?.title || "Usage Tips"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
{t.imageEditor.tips?.subtitle || "Follow these recommendations for best results"}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Wand2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎯 Etkili Promptlar</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• &ldquo;Make the sky sunset orange&rdquo;</li>
                  <li>• &ldquo;Add dramatic lighting&rdquo;</li>
                  <li>• &ldquo;Change background to forest&rdquo;</li>
                </ul>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🖼️ {t.imageEditor.tips?.imageQuality?.title || "Image Quality"}</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• {t.imageEditor.tips?.imageQuality?.resolution || "High resolution (512x512+)"}</li>
                  <li>• {t.imageEditor.tips?.imageQuality?.contrast || "Sharp and contrasted images"}</li>
                  <li>• {t.imageEditor.tips?.imageQuality?.lighting || "Well-lit photos"}</li>
                </ul>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ {t.imageEditor.tips?.proTips?.title || "Pro Tips"}</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• {t.imageEditor.tips?.proTips?.english || "English prompts work better"}</li>
                  <li>• {t.imageEditor.tips?.proTips?.specific || "Try to be specific"}</li>
                  <li>• {t.imageEditor.tips?.proTips?.multiple || "Try multiple attempts"}</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}