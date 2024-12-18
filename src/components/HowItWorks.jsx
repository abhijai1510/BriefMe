const HowItWorks = () => {
    return (
      <section className="mt-16 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="head_text mb-4">
          How <span className="orange_gradient">AI Summarization Works</span>
        </h1>
  
        {/* Introduction */}
        <p className="desc mt-2 leading-relaxed text-gray-700">
          AI-based summarization combines advanced <strong>Natural Language Processing (NLP)</strong>, 
          <strong> Machine Learning (ML)</strong>, and <strong>Deep Learning</strong> techniques to generate 
          concise summaries from extensive texts. The process involves multiple steps, enabling the AI to analyze, 
          process, and extract meaningful content while maintaining the text's essence.
        </p>
  
        {/* Step 1: Text Preprocessing */}
        <div className="text-left mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Text Preprocessing</h2>
          <p className="text-gray-700">
            Before the summarization begins, the input text undergoes preprocessing to prepare it for analysis:
          </p>
          <ul className="list-disc mt-4 pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Tokenization:</strong> Splits the text into smaller units such as words or subwords.
            </li>
            <li>
              <strong>Stop-word Removal:</strong> Removes frequently occurring words like "the," "is," and "at" 
              that do not carry significant meaning.
            </li>
            <li>
              <strong>Stemming and Lemmatization:</strong> Reduces words to their root form (e.g., "running" → "run").
            </li>
            <li>
              <strong>Normalization:</strong> Converts the text to a uniform format, such as lowercasing and removing special characters.
            </li>
          </ul>
        </div>
  
        {/* Step 2: Text Representation */}
        <div className="text-left mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Text Representation (Embeddings)</h2>
          <p className="text-gray-700">
            Once the text is preprocessed, it needs to be converted into a numerical format that machines can understand. 
            This is done using <strong>word embeddings</strong>:
          </p>
          <ul className="list-disc mt-4 pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Word2Vec:</strong> Maps words to high-dimensional vector spaces, capturing their semantic relationships.
            </li>
            <li>
              <strong>GloVe (Global Vectors):</strong> Generates word vectors based on word co-occurrence statistics.
            </li>
            <li>
              <strong>Transformer Embeddings:</strong> Models like GPT-4 produce contextual embeddings, capturing the 
              meaning of words based on their surrounding context.
            </li>
          </ul>
        </div>
  
        {/* Step 3: Summary Generation */}
        <div className="text-left mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Summary Generation</h2>
          <p className="text-gray-700">
            The AI model generates the summary using two main techniques:
          </p>
          <ul className="list-disc mt-4 pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Extractive Summarization:</strong> Selects key sentences directly from the original text.
            </li>
            <li>
              <strong>Abstractive Summarization:</strong> Generates new sentences that convey the original meaning more concisely.
            </li>
          </ul>
        </div>
  
        {/* Conclusion */}
        <div className="mt-8">
          <p className="desc leading-relaxed text-gray-700">
            In summary, AI models like GPT-4 combine sophisticated mathematical techniques, deep learning architectures, 
            and vast training datasets to deliver accurate, concise, and context-aware summaries. These models significantly 
            reduce the time required to analyze large amounts of text, enabling faster understanding and decision-making.
          </p>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  