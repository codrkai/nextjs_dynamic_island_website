import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
  const [pageContent, setPageContent] = useState({html:<></>});
  const [islandContent, setIslandContent] = useState({icon: <span class="digital-clock">9:41 <span class="digital-clock-text">Thursday, 12 July</span></span>});
  const [islandToggle, setIslandToggle] = useState(false);
  
  const setLoading = async () => {
      await setTimeout( () => {
          setIslandToggle(false);
          setIslandContent({icon: <div class="lds-ring"><div></div><div></div><div></div><div></div></div>});
      }, 100);
  } 
  
  const handleHome = async () => {
      await setLoading();
      setTimeout( () => {
        setIslandContent({
          icon: <span class="digital-clock">9:41 <span class="digital-clock-text">Thursday, 12 July</span></span>
        });
        
        setPageContent({
          html: <></>
        });
        
        setIslandToggle(false);
      }, 1000);
  }

  const handleMusic = async () => {
    await setLoading();
    setTimeout( () => {
        setIslandContent({
          icon: <span class="island-music">
            <span class="island-music-controls">
              <span class="island-music-left"><img src="/images/music-player.png" height="35" /></span>
              <a href="#rewind">&#x23EA;</a> 
              <a href="#stop">&#x23F9;</a> 
              <a href="#play">&#x23EF;</a> 
              <a href="#fast-forward">&#x23E9;</a>
            </span>
            <span class="island-music-right"><img src="/images/equalizer.gif" height="40" /></span>
          </span>});

        setPageContent({
          html: <></>
        });

        setIslandToggle(true);
    }, 1000);
  }

  const handleChat = async () => {
    await setLoading();
    setTimeout( () => {
        setIslandContent({
          icon: <span class="island-chat">
            <img src="/images/genesis-lopez.jpg" />
            <a href="#"><i class="bi bi-telephone"></i></a>
            <a href="#"><i class="bi bi-chat-dots-fill"></i></a>
            <a href="#"><i class="bi bi-plus-circle-dotted"></i></a>
            <p>Tori Nichols <span class="bi bi-dot text-success">online</span></p>
          </span>
        });

        setPageContent({
          html: <></>
        });

        setIslandToggle(true);
    }, 1000);
  }

  const handleChatCall = async () => {
    await setLoading();
    setTimeout( () => {
      setIslandContent({
        icon: <span class="island-chat">
          <img src="/images/sensei-johnny.jpg" />
          <a href="#"><i class="icon-phone trin-trin"></i></a>
          <a href="#"><i class="bi bi-x-circle text-danger"></i></a>
          <p>
            Sensei Johnny
            <br /><span class="text-success">Incoming Call</span>
          </p>
        </span>
      });

        setPageContent({
          html: <></>
        });

        setIslandToggle(true);
    }, 1000);
  }

  const handleChatRequest = async () => {
    await setLoading();
    setTimeout( () => {
      setIslandContent({
        icon: <span class="island-chat">
          <img src="/images/amanda-k.jpg" />
          <a href="#"><i class="bi bi-check-circle"></i></a>
          <a href="#"><i class="bi bi-x-circle text-danger"></i></a>
          <p>
            Amanda LaRusso
            <br /><span class="text-success">New Friend Request</span>
          </p>
        </span>
      });

        setPageContent({
          html: <></>
        });

        setIslandToggle(true);
    }, 1000);
  }

  const handleAbout = async () => {
      await setLoading();
      setTimeout( () => {
        setIslandContent({
          icon: <span class="island-about">
              <img src="/images/nft-monkey.jpg" /> 
              <a href="#"><i class="fab fa-facebook-f"></i></a> 
              <a href="#"><i class="fab fa-twitter"></i></a> 
              <a href="#"><i class="fab fa-instagram"></i></a> 
              <a href="#"><i class="fab fa-youtube"></i></a> 
              <a href="#"><i class="fab fa-github"></i></a> 
          </span>});

        setPageContent({
          html: <>
            <div class="container bg-light p-4">
              <h1>About Us</h1>
              <p class="my-5"></p>
              <div class="row">
                <div class="col-lg-4">
                  <img src="/images/placeholder-macbook.jpg" height="180" />
                  <h2 class="mt-3">What We Do</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                </div>
                <div class="col-lg-4">
                  <img src="/images/placeholder-office.jpg" height="180" />
                  <h2 class="mt-3">How We Can Help</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                </div>
                <div class="col-lg-4">
                  <img src="/images/placeholder-building.jpg" height="180" />
                  <h2 class="mt-3">Get Started</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                </div>
              </div>
            </div>
          </>
        });

        setIslandToggle(true);
      }, 1000);
  }

  const handleContact = async () => {
      await setLoading();
      setTimeout( () => {
        setIslandContent({
          icon: <span class="island-contact">
              <a href="#"><i class="fab fa-whatsapp"></i></a> 
              <a href="#"><i class="bi-envelope-fill"></i></a> 
              <span>codrkai@gmail.com</span>
          </span>});
        
        setPageContent({
          html: <>
            <div class="container w-50 bg-light p-4">
              <h1>Contact Us</h1>
              <p class="my-5"></p>
              <form class="form-group">
                <div class="col-sm-9 mt-5">
                  <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div class="col-sm-9 mt-4">
                  <input type="text" class="form-control" id="inputSubject" placeholder="Subject" />
                </div>
                <div class="col-sm-8 mt-4">
                  <textarea cols="65" rows="4"></textarea>
                </div>
                <button class="btn btn-primary mt-5">Submit</button>
              </form>
            </div>
          </>
        });

        setIslandToggle(true);
      }, 1000);
  }
  
  return (
    <>
      <div class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-brand"><a href="/"><img class="rounded-circle" src="/images/codrkai-profile.jpg" width="60" /></a></div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav  ml-auto">
              <li class="nav-item"><a class="nav-link" href="#" onClick={handleHome}>Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#" onClick={handleAbout}>About</a></li>
              <li class="nav-item"><a class="nav-link" href="#" onClick={handleContact}>Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="islandWrapper">
          <div class={islandToggle ? "islandBox islandBoxExpand" : "islandBox"} id="islandContent">
              <div class="island">
                  {islandContent.icon}
              </div>
          </div>
      </div>

      <div class="container">
        <p class="my-5"></p>
        {pageContent.html}

        <div class="card-group">
          <div class="card w-25 m-5">
              <a href="#" onClick={handleMusic}><Image src="/images/music-player.png" width="400" height="300" /></a>
          </div>
        </div>

        <div class="card-group">
          <div class="card w-25 m-5">
              <a href="#" onClick={handleChat}><Image src="/images/chat-room.jpg" width="800" height="600" /></a>
              <p>
                <a href="#" class="m-5" onClick={handleChatCall}>Incoming Call</a>
                <a href="#" class="m-5" onClick={handleChatRequest}>New Friend Request</a>
              </p>
          </div>
        </div>

        <footer class="footer">
          &copy; Codr Kai Tutorials &copy 2022
        </footer>
      </div>
    </>
  )
}
