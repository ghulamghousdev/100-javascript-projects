var data={ "notes": [
  {
    "title": "Carrying the Fire",
    "author": 'Michael Collins',
    "quote": "Man has always gone where he has been able to go. It&rsquo;s that simple. He will continue pushing back his frontier, no matter how far it may carry him from his homeland."
  },
  {
    "title" : "Kitchen Confidential",
    "author": "Anthony Bourdain",
    "quote": "Bigfoot understood that there are two types of people in this world: those who do what they say they&rsquo;re going to do&mdash;and everyone else."
  },
  {
    "title" : "Oracle Night",
    "author": "Paul Aster",
    "quote": "We excreted autumn and winter colors, but running invisibly through our veins, the very stuff that kept us alive, was the crimson of a mad artist&mdash;a red as brilliant as fresh paint."
  },
  {
    "title": "The Sirens of Titan",
    "author": "Kurt Vonnegut",
    "quote": "&ldquo;Only an Earthling year ago,&rdquo; said Constant. &ldquo;It took us that long to realize that a purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.&rdquo;"
  },
  {
    "title": "The Martian",
    "author": "Andy Weir",
    "quote": "My asshole is doing as much to keep me alive as my brain."
  },
  {
    "title": "The Food Traveler&rsquo;s Handbook",
    "author": "Jodi Ettenburg",
    "quote": "But even if I am not asking questions, I am watching. While eating my soup at a crowded street stall, I can look around and see the patterns and pleasures of those around me."
  },
  {
    "title": "The Lathe of Heaven",
    "author": "Ursula K. Le Guin",
    "quote": "&ldquo;The aim of psychotherapy is precisely this, to remove those groundless fears and nightmares, to bring up what&rsquo;s unconscious into the light of rational consciousness, examine it objectively, and find that there is nothing to fear.&rdquo; &ldquo;But there is,&rdquo; Orr said very softly."
  },
  {
    "title": "Verdigris Deep",
    "author": "Frances Hardinge",
    "quote": "The letters were bitter and funny and there were holes of unsaid where you could feel the demons breathing."
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  var content = item.quote; 
  var book = item.title;
  var author = item.author;

  $('.quote-content').html(content); 
  $('.quote-book').html(book);
  $('.quote-author').html(author);
}

$(document).ready(randomize);

$('.next').on('click', randomize);