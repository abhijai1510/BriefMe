import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({ url: '', summary: '' });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setAllArticles(updatedAllArticles);
      setArticle(newArticle);
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  // Simple heuristic function to determine category interests based on the last 5 articles
  const analyzeInterests = (articles) => {
    let politicalCount = 0;
    let healthCount = 0;
    let techCount = 0;

    const politicalKeywords = ["election", "policy", "government", "senate", "congress", "president", "political", "diplomacy", "governance"];
    const healthKeywords = ["health", "wellness", "medicine", "doctor", "hospital", "disease", "virus", "nutrition", "medical", "fitness"];
    const techKeywords = ["technology", "tech", "software", "startup", "ai", "artificial intelligence", "innovation", "device", "gadget", "digital"];

    for (const art of articles) {
      const summaryLower = art.summary.toLowerCase();
      if (politicalKeywords.some(k => summaryLower.includes(k))) politicalCount++;
      if (healthKeywords.some(k => summaryLower.includes(k))) healthCount++;
      if (techKeywords.some(k => summaryLower.includes(k))) techCount++;
    }

    const maxCount = Math.max(politicalCount, healthCount, techCount);
    if (maxCount === 0) {
      return { interests: [], message: "It's hard to determine your interest based on these articles." };
    }

    let determinedInterests = [];
    if (politicalCount === maxCount) determinedInterests.push("political news");
    if (healthCount === maxCount) determinedInterests.push("health-related articles");
    if (techCount === maxCount) determinedInterests.push("technology-related content");

    return { interests: determinedInterests, message: "" };
  };

  const getInterestDetails = (interests) => {
    // Provide tailored insights based on detected interests
    let details = "";

    if (interests.includes("political news")) {
      details += `\n- It seems you enjoy staying informed about global events and policies. You might prefer reading investigative reports, political analyses, and editorials from reputable news sources. Consider exploring policy think-tanks, government reports, or international relations journals for deeper insights.`;
    }

    if (interests.includes("health-related articles")) {
      details += `\n- You appear interested in wellness and health. Perhaps you enjoy reading about new medical breakthroughs, healthy lifestyle tips, and nutrition advice. Medical journals, health blogs with expert reviews, and public health organizations' updates might cater to your interests.`;
    }

    if (interests.includes("technology-related content")) {
      details += `\n- Your interests lean towards technology and innovation. You may prefer reading about startups, software trends, AI developments, and product reviews. Keeping up with tech news outlets, industry leaders on social media, and innovation trend reports could be beneficial.`;
    }

    if (details) {
      details += `\n\nOver time, as you summarize more articles, this analysis will update. If your preferences shift, you might notice a change in these recommendations. Keep exploring to refine your reading profile!`;
    }

    return details.trim();
  };

  // Determine if we have enough articles for interest analysis
  const hasEnoughArticles = allArticles.length >= 5;
  const lastFiveArticles = hasEnoughArticles ? allArticles.slice(0, 5) : [];
  const { interests, message } = hasEnoughArticles ? analyzeInterests(lastFiveArticles) : { interests: [], message: "" };
  const interestBoxContent = hasEnoughArticles
    ? (interests.length > 0
      ? `Based on the last 5 articles you've summarized, you're showing interest in ${interests.join(" and ")}.`
      : message)
    : "Summarize at least 5 articles to reveal your reading interests and get personalized insights.";

  return (
    <section className="w-full max-w-3xl mx-auto mt-16 px-4">
      {/* Interest Prediction Box */}
      <div className="bg-white/80 backdrop-blur-md border border-[#6A8D73]/20 rounded-lg shadow-md p-6 mb-10">
        <h2 className="font-satoshi font-bold text-xl text-[#6A8D73] mb-4">Your Reading Interests</h2>
        <p className="font-inter font-medium text-sm text-[#6A8D73] leading-relaxed whitespace-pre-wrap">
          {interestBoxContent}
          {hasEnoughArticles && interests.length > 0 && (
            "\n\n" + getInterestDetails(interests)
          )}
        </p>
      </div>

      {/* Input & History Container */}
      <div className="bg-white/80 backdrop-blur-md border border-[#6A8D73]/20 rounded-lg shadow-md p-6 flex flex-col gap-4">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-3 w-5 h-5 opacity-60"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer bg-[#E4FFE1] text-[#6A8D73] rounded-full py-2.5 pl-10 pr-12 w-full border border-[#6A8D73]/20 focus:border-[#6A8D73] focus:outline-none focus:ring-0 transition-all"
          />
          <button
            type="submit"
            className="submit_btn absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-[#6A8D73] bg-[#F4FDD9] text-[#6A8D73] hover:bg-[#6A8D73] hover:text-[#F4FDD9] transition-all"
          >
            ✓
          </button>
        </form>

        {/* Browser URL History */}
        {allArticles.length > 0 && (
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card p-3 flex items-center gap-3 bg-[#FFE8C2] border border-[#6A8D73]/20 rounded-lg cursor-pointer hover:bg-[#FFE8C2]/80 transition"
              >
                <div
                  className="copy_btn w-8 h-8 rounded-full flex justify-center items-center bg-white/50 border border-[#6A8D73]/20 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(item.url);
                  }}
                >
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy_icon"
                    className="w-4 h-4"
                  />
                </div>
                <p className="flex-1 font-satoshi text-[#6A8D73] font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Display Results */}
      <div className="my-10">
        {isFetching ? (
          <div className="flex justify-center">
            <img src={loader} alt="loader" className="w-16 h-16 object-contain" />
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-4 bg-white/80 backdrop-blur-md border border-[#6A8D73]/20 rounded-lg shadow-md p-6">
              <h2 className="font-satoshi font-bold text-xl text-[#6A8D73]">
                Article <span className="bg-gradient-to-r from-[#6A8D73] to-[#F0A868] bg-clip-text text-transparent">Summary</span>
              </h2>
              <div className="summary_box bg-[#F4FDD9] rounded-lg p-4">
                <p className="font-inter font-medium text-sm text-[#6A8D73] leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
