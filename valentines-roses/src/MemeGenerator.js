import React, { useState } from "react";

const memes = [
    "Roses are red, violets are blue… I’m still single, and so are you!",
    "Valentine’s Day? More like ‘Half-Price Chocolate Eve’.",
    "I saved a lot of money this Valentine’s by staying single.",
    "Date night? More like takeout-for-one and Netflix.",
    "Happy Singles Awareness Day… again.",
    "Who needs a Valentine when you have WiFi?",
    "Just me, my blanket, and my non-existent love life.",
    "Relationship status: Waiting for someone to accidentally fall in love with me.",
    "I tried flirting today. Now I have an awkward memory to live with forever.",
    "Good news! No one can break my heart this year.",
    "Happy Valentine's to all the couples… and happy Discount Chocolate Eve to me!",
    "This year, I’m celebrating Valentine’s Day with my true love: food.",
    "Why spend money on a date when you can buy pizza instead?",
    "Valentine’s Day is the only day my single life feels like a relationship… with loneliness.",
    "Some people have soulmates; I have my pillow.",
    "I was going to get myself flowers, but I’d rather buy snacks.",
    "Love is in the air… too bad I’m indoors avoiding it.",
    "Being single means I get the whole bed to myself. Win!",
    "Valentine’s Day reminds me that my love life is a sitcom with no love interest.",
    "At least I don’t have to stress about what to gift my imaginary boyfriend.",
    "Every couple is out having dinner while I’m here trying to decide which leftovers to microwave.",
    "Roses are red, violets are blue, third-wheeling again… nothing is new.",
    "The best relationship I have is with my Netflix account.",
    "Cupid, I think you missed me… again.",
    "Single, but at least my memes are fire.",
    "February 14th? More like February 15th’s chocolate clearance sale preparation.",
    "I was going to get a Valentine’s date, but then I remembered I like my alone time.",
    "No flowers? No problem. I accept cash and snacks.",
    "Date night? More like sweatpants and ice cream.",
    "Happy ‘Treat Yourself Because No One Else Will’ Day!",
    "I love being single because it means more time for naps and fewer arguments.",
    "I was going to go out on Valentine's, but my couch is just so supportive.",
    "They say love is blind. Maybe that’s why it hasn’t found me yet.",
    "Love at first sight? More like ‘Left on read’ at first text.",
    "My love life is like a Windows update—always pending.",
    "Relationship status: Currently dating my bed.",
    "The only bouquet I need is a bunch of fries.",
    "Love may be in the air, but so is WiFi… and that’s what really matters.",
    "Valentine’s Day is just a reminder that I need a pet.",
    "I don’t need a Valentine; I need a vacation.",
    "Instead of a boyfriend, I got myself another blanket.",
    "I’d rather be single than have to share my fries.",
    "One day, my prince will come. Until then, I have memes.",
    "I like my relationships like I like my coffee… nonexistent.",
    "No Valentine, no problem—I'll just swipe left on life.",
    "If love is a battlefield, I’m on the sidelines with popcorn.",
    "My heart is not available right now. Please try again later.",
    "I was hoping for a surprise Valentine, but all I got was a surprise bill.",
    "Valentine’s Day is for couples; February 15th is for the real MVPs—single people buying discounted chocolate.",
    "Love is temporary; pizza is forever.",
    "I’m not alone; I’m in a long-term relationship with freedom.",
    "The only thing I’m falling for this Valentine’s is my bed.",
    "Why fall in love when I can fall asleep?",
    "Who needs a date when you have a fully stocked fridge?",
    "My Valentine's Day plans? Ignoring all the couples’ posts on social media.",
    "I was going to go out, but then I remembered I like peace and quiet.",
    "Love is like WiFi—stronger for some, weak for others, and nonexistent for me.",
    "The only thing cuddling me tonight is my blanket.",
    "If I had a dollar for every time I was single on Valentine’s, I’d be rich.",
    "Single life isn’t so bad when you think about all the drama you’re avoiding.",
    "I love being single because it means I can eat all the fries without sharing.",
    "Valentine’s is the only day people notice my single status—like, thanks for the reminder.",
    "Single but thriving… or at least surviving.",
    "My relationship status: Just me and my overpriced coffee.",
    "I planned a romantic dinner for two. Too bad I ate both meals.",
    "Forget a boyfriend, I need a nap.",
    "I’m not single, I’m ‘independently owned and operated’.",
    "All the love in the world and Cupid still can’t find me.",
    "My ideal Valentine’s date? My dog and a pizza.",
    "My only Valentine is my charger because it never leaves me on 1%.",
    "Roses are red, love is fake, weddings are expensive, let's all eat cake.",
    "No Valentine? No problem. I have unlimited screen time and snacks.",
    "I'm not saying I'm lonely, but my echo and I have deep conversations.",
    "Valentine's Day? More like a 24-hour reminder that I'm single.",
    "At least I don’t have to share my dessert.",
    "Why cry over love when I can cry over my favorite TV show?",
    "They say there's someone for everyone. Guess mine got lost.",
    "I'm single by choice—my choice? Not really.",
    "Valentine’s Day is just another day… but with more awkward third-wheeling.",
    "Love is patient, love is kind… still waiting for it to find me.",
    "At least being single means I never have to pretend to like someone’s cooking.",
    "Relationship goals? Finding a pizza that delivers at 2 AM.",
    "Why buy gifts for a partner when I can spoil myself?",
    "The best thing about being single? I don’t have to share my food.",
    "Cupid must be on vacation, because I’ve been waiting for years.",
    "Valentine’s is just an excuse for couples to flex while the rest of us survive.",
    "I’d rather be single than pretend to like someone’s playlist.",
    "One day I’ll find love. Until then, it’s memes and movies.",
    "Netflix and chill? More like Netflix and will.",
    "They say love is magical. Maybe I need a new wand.",
    "Love? Never heard of it.",
    "Roses are red, violets are blue, sugar is sweet, and I have no boo.",
    "I don't need a date, I just need a good WiFi connection.",
    "The only love triangle I need is me, my blanket, and my snacks.",
    "Valentine’s Day is the perfect time to appreciate myself!",
    "Cupid skipped me, but I’m still thriving.",
    "Single today, but at least I don’t have to buy a gift.",
    "I don’t chase love, I chase my dreams… and sometimes my Uber Eats delivery guy.",
    "Why be in love when you can be in bed by 9 PM?",
    "Love fades, but comfort food is forever.",
    "No heartbreak, just heart-shaped chocolates for me!",
    "Some people fall in love. I trip over my own feet.",
    "If being single was a sport, I’d be a gold medalist.",
    "Every couple posting cute pictures… Meanwhile, I’m here with my snacks."
  ];
  
  

function MemeGenerator() {
  const [meme, setMeme] = useState(memes[0]);

  const generateMeme = () => {
    let newMeme;
    do {
      newMeme = memes[Math.floor(Math.random() * memes.length)];
    } while (newMeme === meme); // Avoid repeating the same meme

    setMeme(newMeme);
  };

  return (
    <div className="meme-card">
      <p>{meme}</p>
      <button className="generate-button" onClick={generateMeme}>
        Generate Meme 🚀
      </button>
    </div>
  );
}

export default MemeGenerator;
