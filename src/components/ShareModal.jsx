import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageSquare, Send, Mail, Sparkles, Globe, ExternalLink } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, stateData }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate shareable URL with URL params
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';
  const shareUrl = stateData
    ? `${origin}/?state=${encodeURIComponent(stateData.state)}`
    : `${origin}/`;

  const shareTitle = stateData
    ? `Explore ${stateData.artForm} from ${stateData.state} on Interactive Art Map of India`
    : `Interactive Art Map of India - Discover 28 Art Traditions across 28 States`;

  const shareText = stateData
    ? `Check out ${stateData.artForm} (${stateData.category}) from ${stateData.state}, India on this interactive cultural art map!`
    : `Discover the rich cultural heritage and traditional art forms across all 28 states of India.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (e) {
        console.log('Share canceled', e);
      }
    } else {
      handleCopy();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#FAF7F2] border border-[#D4AF37] rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
        
        {/* Modal Header */}
        <div className="bg-[#2C221E] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif-title text-[#FAF7F2]">
                Shareable Link
              </h3>
              <p className="text-[11px] text-[#D4AF37]/90">
                {stateData ? `Direct link to ${stateData.state}` : 'Share full map app'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#D4AF37] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          {/* Direct Card Context */}
          {stateData && (
            <div className="bg-white p-3.5 rounded-2xl border border-[#E8E1D7] flex items-center space-x-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#2C221E] text-[#D4AF37] flex items-center justify-center font-bold text-sm font-serif shrink-0">
                {stateData.id}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[#B85D3A] uppercase tracking-wider">
                  {stateData.category}
                </p>
                <h4 className="text-sm font-bold text-[#2C221E] truncate font-serif-title">
                  {stateData.state} - {stateData.artForm}
                </h4>
                <p className="text-[11px] text-[#6B5E57] truncate">
                  📍 {stateData.location}
                </p>
              </div>
            </div>
          )}

          {/* Copy Link Input Section */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#2C221E] uppercase tracking-wider">
              Shareable URL Link
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white border border-[#E8E1D7] rounded-xl px-3.5 py-2.5 flex items-center space-x-2 text-xs text-[#2C221E] overflow-hidden shadow-xs">
                <Globe className="w-4 h-4 text-[#B85D3A] shrink-0" />
                <span className="truncate font-mono select-all text-[#2C221E]">
                  {shareUrl}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-sm shrink-0 cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#2C221E] text-[#D4AF37] hover:bg-[#1E1715]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-emerald-600 font-medium flex items-center">
                <Sparkles className="w-3 h-3 mr-1" />
                Link copied to clipboard! Anyone opening this link will land directly on this view.
              </p>
            )}
          </div>

          {/* Quick Social Share Buttons */}
          <div className="space-y-2.5">
            <span className="block text-xs font-semibold text-[#2C221E] uppercase tracking-wider">
              Share Directly To
            </span>

            <div className="grid grid-cols-4 gap-2">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] transition-all group"
              >
                <MessageSquare className="w-5 h-5 mb-1 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-semibold">WhatsApp</span>
              </a>

              {/* Twitter / X */}
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-600 transition-all group"
              >
                <Send className="w-5 h-5 mb-1 text-sky-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-semibold">Twitter</span>
              </a>

              {/* LinkedIn / Social */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 text-blue-700 transition-all group"
              >
                <ExternalLink className="w-5 h-5 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-semibold">LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={mailUrl}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#B85D3A]/10 hover:bg-[#B85D3A]/20 border border-[#B85D3A]/30 text-[#B85D3A] transition-all group"
              >
                <Mail className="w-5 h-5 mb-1 text-[#B85D3A] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-semibold">Email</span>
              </a>
            </div>
          </div>

          {/* Web Share API option if supported */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full py-2.5 rounded-xl border border-[#D4AF37] text-[#2C221E] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#B85D3A]" />
              <span>Use System Native Share</span>
            </button>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#E8E1D7]/40 px-6 py-3 border-t border-[#E8E1D7] flex items-center justify-between text-[11px] text-[#6B5E57]">
          <span>✨ Interactive Art Map of India</span>
          <button
            onClick={onClose}
            className="font-semibold text-[#2C221E] hover:underline cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
