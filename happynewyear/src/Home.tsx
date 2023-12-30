import React from "react";
import Music from "./Music";
import "./Home.css";
import { title } from "process";

const MusicLst = [
  {
    id: "2022.01.01",
    title: "Le Festin",
    artist: "Camille",
    photo: "./img/LeFestin.png",
    lyrics: `Les rêves des amoureux sont comme le bon vin
    Ils donnent de la joie ou bien du chagrin
    Affaibli par la faim je suis malheureux
    Volant en chemin tout ce que je peux
    Car rien n'est gratuit dans la vie
    
    L'espoir est un plat bien trop vite consommé
    À sauter les repas je suis habitué
    Un voleur solitaire, est triste à nourrir
    À un jeu si amer, je n'peux réussir
    Car rien n'est gratuit dans la vie
    
    Jamais on ne me dira
    Que la course aux étoiles, ça n'est pas pour moi
    Laissez-moi vous émerveiller et prendre mon envol
    Nous allons enfin nous régaler
    
    Ah, la fête va enfin commencer
    
    Et sortez les bouteilles, finis les ennuis
    Je dresse la table de ma nouvelle vie
    Je suis heureux à l'idée de ce nouveau destin
    Une vie à me cacher, et puis libre enfin
    Le festin est sur mon chemin
    Une vie à me cacher et puis libre enfin
    Le festin est sur mon chemin
    
    Source: lyricfind
    Songwriter: MICHAEL GIACCHINO
    Publisher: Universal Music Publishing Group
    Lyric Licensed & Provided by Lyricfind`,
  },
  {
    id: "2023.01.01",
    title: "I",
    artist: "태연",
    photo: "./img/I.png",
    lyrics: `빛을 쏟는 sky
    그 아래 선 아이 I
    꿈꾸듯이 fly
    My life is a beauty
    어디서 많이 들어본 이야기
    미운 오리와 백조 또 날기 전의 나비
    사람들은 몰라 너의 날개를 못 봐
    네가 만난 세계라는 건 잔인할지도 몰라
    
    But strong girl, you know you were born to fly
    네가 흘린 눈물
    네가 느낀 고통은 다
    더 높이 날아오를 날을 위한 준비일 뿐 butterfly
    Everybody's gonna see it soon
    
    빛을 쏟는 sky
    그 아래 선 아이 I
    꿈꾸듯이 fly
    My life is a beauty
    
    잊었던 꿈 내 맘 또 그려내
    움츠렸던 시간 모두 모아 다 삼켜내
    작은 기억 하나 둘씩 날 깨워가
    세상 가득 채울 만큼 나를 펼쳐가
    
    길고 긴 밤을 지나
    다시 trip 길을 떠나볼래
    Why not 이 세상에
    내 맘을 깨워 주는 한마디
    
    혼자였던 yesterday
    셀 수 없는 시선에
    떨어지는 눈물로
    하루를 또 견디고
    
    아슬했던 yesterday
    쏟아지던 말들에
    흔들리는 나를 또 감싸고
    
    빛을 쏟는 sky
    그 아래 선 아이 I
    꿈꾸듯이 fly
    My life is a beauty
    
    My life is a beauty
    
    꽃잎은 저물고 힘겨웠던 난
    작은 빛을 따라서
    아득했던 날 저 멀리 보내고
    찬란하게 날아가
    
    빛을 쏟는 sky 
    새로워진 eyes 새로워진 eyes 
    저 멀리로 fly
    Fly high, fly high
    난 나만의 beauty
    
    눈 감은 순간 시간은 멈춰가
    난 다시 떠올라`,
  },
  {
    id: "2024.01.01",
    title: "Youth",
    artist: "기현(MostaX)",
    photo: "./img/Youth.png",
    lyrics: `문득 달라진 게 느껴져
    정말 어른이 되고 있어
    내 부족함이 보여도
    더는 내가 별로 안 미워
    
    오늘 나의 마음보다도
    몇 년 뒤를 떠올리면서
    나는 자주 불안해했어
    그땐 모든 게 다 그랬어
    
    난 가끔 그리울 것 같아 어리석었던
    그래서 더 달리고 달렸던 날들
    푸르고 또 푸르던 모습이
    새빨갛게 춤추고 뛰던 가슴도
    
    난 요즘엔 하늘이 아름다워
    잘 알던 서울이 새삼스러워
    비가 오면 그대로 다 맞고 싶어
    애쓰지 않더라도 행복하고 싶어
    
    워어어-우어
    워어어-우어
    
    문득 떠나고 싶은 날엔
    훌쩍 떠나고 싶은데
    할 일이 먼저 생각나
    꽉 찬 캘린더를 바라봐
    
    나의 이름으로 쓰여지는 약속들이
    두근거리던 내 주말들을 채우지만
    난 어디로 가는지를 잘 알고 있어
    그래서 더 생각이나
    
    많이 무모하고 어리석었던
    그래서 더 달리고 달렸던 날들
    푸르고 또 푸르던 모습이
    새빨갛게 춤추고 뛰던 가슴도
    
    난 요즘엔 하늘이 아름다워
    잘 알던 서울이 새삼스러워
    비가 오면 그대로 다 맞고 싶어
    애쓰지 않더라도 행복하고 싶어
    
    워어어-우어
    워어어-우어
    
    사랑한단 말을 더 쉽게 하고 싶어
    워어어-우어
    워어어-우어
    
    기억해 불안했던 나의 어린 마음을
    겁먹은 채 새우던 어두운 밤을
    그때 내게 말할 수 있다면
    넌 지금도 충분히 잘하고 있다고`,
  },
];

function Home() {
  return (
    <div className="contents">
      {MusicLst.map((song) => (
        <div className="container">
          <div key={song.id} className="s-one">
            <h2>{song.id}</h2>
            <img src={song.photo} className="s-photo" />
          </div>
          <h3>
            {song.artist} - {song.title}
          </h3>
          <div className="two">
            <pre>{song.lyrics}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
