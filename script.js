const reels = [
  {
    id: 1,
    video: "./assets/video/video1.mp4",
    userImg: "https://randomuser.me/api/portraits/women/11.jpg",
    username: "@apsaraali-khan",
    caption: "Day 50 bring the dom back into focus for a reason",
    likes: 2300,
    comments: 356,
    shares: 720
  },
  {
    id: 2,
    video: "./assets/video/video2.mp4",
    userImg: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "@john-carter",
    caption: "Chasing sunsets like never before",
    likes: 1800,
    comments: 220,
    shares: 540
  },
  {
    id: 3,
    video: "./assets/video/video3.mp4",
    userImg: "https://randomuser.me/api/portraits/women/18.jpg",
    username: "@bella-mode",
    caption: "Fit check of the day!",
    likes: 4200,
    comments: 900,
    shares: 300
  },
  {
    id: 4,
    video: "./assets/video/video4.mp4",
    userImg: "https://randomuser.me/api/portraits/men/24.jpg",
    username: "@traveling-soul",
    caption: "Another adventure begins!",
    likes: 5000,
    comments: 310,
    shares: 710
  },
  {
    id: 5,
    video: "./assets/video/video5.mp4",
    userImg: "https://randomuser.me/api/portraits/women/27.jpg",
    username: "@dancerina",
    caption: "Dancing is my therapy",
    likes: 3500,
    comments: 780,
    shares: 430
  },
  {
    id: 6,
    video: "./assets/video/video6.mp4",
    userImg: "https://randomuser.me/api/portraits/men/44.jpg",
    username: "@tech-guru",
    caption: "Coding late nights again!",
    likes: 2900,
    comments: 190,
    shares: 220
  },
  {
    id: 7,
    video: "./assets/video/video7.mp4",
    userImg: "https://randomuser.me/api/portraits/men/50.jpg",
    username: "@chef-master",
    caption: "Cooking magic happens here!",
    likes: 6700,
    comments: 1200,
    shares: 980
  },
  {
    id: 8,
    video: "./assets/video/video8.mp4",
    userImg: "https://randomuser.me/api/portraits/women/51.jpg",
    username: "@nature-queen",
    caption: "Nature heals the soul",
    likes: 4100,
    comments: 680,
    shares: 330
  },
  {
    id: 9,
    video: "./assets/video/video9.mp4",
    userImg: "https://randomuser.me/api/portraits/men/62.jpg",
    username: "@biker-bro",
    caption: "Another day on the road",
    likes: 5100,
    comments: 760,
    shares: 610
  },
  {
    id: 10,
    video: "./assets/video/video10.mp4",
    userImg: "https://randomuser.me/api/portraits/women/66.jpg",
    username: "@fitness-girl",
    caption: "Morning workout done!",
    likes: 6200,
    comments: 950,
    shares: 740
  },
  {
    id: 11,
    video: "./assets/video/video11.mp4",
    userImg: "https://randomuser.me/api/portraits/men/77.jpg",
    username: "@vibes-only",
    caption: "Feeling the groove tonight",
    likes: 3300,
    comments: 400,
    shares: 290
  },
  {
    id: 12,
    video: "./assets/video/video12.mp4",
    userImg: "https://randomuser.me/api/portraits/women/83.jpg",
    username: "@city-lights",
    caption: "City nights never disappoint ✨",
    likes: 4700,
    comments: 640,
    shares: 520
  }
];

let sum = '';

reels.forEach(function(elem) {
    
    
  sum = sum +  ` <div class="reel">
                    <video autoplay loop muted controls src="${elem.video}"></video>

                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userImg}">
                            <h4>${elem.username}</h4>
                            <button>Follow</button>
                        </div>
                         <h3>${elem.caption}</h3>
                    </div>

                   

                    <div class="right">
                        <div class="like rgt-icon">
                            <h4><i class="ri-heart-3-line"></i></h4>
                            <h6>${elem.likes}</h6>
                        </div>

                        <div class="comment rgt-icon">
                            <h4><i class="ri-message-2-line"></i></h4>
                            <h6>${elem.shares}</h6>
                        </div>

                        <div class="share rgt-icon">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shares}</h6>
                        </div>

                        <div class="menu rgt-icon">
                            <h4><i class="ri-more-2-line"></i></h4>
                            
                        </div>


                    </div>
                </div>
    
    `
   


})
let allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum;
