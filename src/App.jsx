import './App.css'

function App() {
  return (
    <>
     <header>
            <div className="content">
                <img src="/assets/gem-regular.svg" alt="gem"/>
                <div className="line"></div>
                <hr/>
                <div className="intro">
                    <h1>Metaverse</h1>
                    <p>
                        Innovation that will shape how we <a href="https://www.codeacademykids.com/">connect</a>
                        in the world an <a href="https://www.codeacademykids.com/">opportunity</a>
                        for everybody.
                    </p>
                </div>
                <hr/>
                <div className="line"></div>
            </div>
            <nav>
                <button>intro</button>
                <button>work</button>
                <button>about</button>
                <button>contact</button>
            </nav>
        </header>
        <main>
            <article id="intro" className="tab">
                <h2 className="major">Intro</h2>
                <video className="cover" src="/assets/tab-1.mp4" muted autoplay loop></video>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, eum possimus explicabo repellat impedit eius omnis sapiente? Libero aperiam ut, sint quasi sapiente nesciunt quibusdam fugit voluptas placeat architecto deleniti doloremque quidem vel, eum iure adipisci incidunt. <br/>
                    <br/>
                    
                    Hic nesciunt incidunt commodi delectus nostrum? Voluptatum perspiciatis sequi nobis, voluptates aperiam recusandae omnis ullam, reprehenderit labore tempore et! Tenetur accusantium tempore quibusdam, minima vel, neque ullam magnam cumque at quo corporis. Rerum consequuntur voluptatibus minima eligendi, quibusdam, doloremque quisquam excepturi est quam autem sunt suscipit tempore dolores quas provident! Recusandae, fugiat officiis deleniti quibusdam perferendis maiores! Doloribus obcaecati ipsum dicta maiores?
                </p>
                <img className="close" onclick="closeTab(event)" src="/assets/xmark-solid.svg" alt="xmark"/>
            </article>

            <article id="work" className="tab">
                <h2 className="major">Work</h2>
                <img className="cover" src="/assets/tab-2.jpg" alt="tab-2"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, eum possimus explicabo repellat impedit eius omnis sapiente? Libero aperiam ut, sint quasi sapiente nesciunt quibusdam fugit voluptas placeat architecto deleniti doloremque quidem vel, eum iure adipisci incidunt. <br/>
                    <br/>Hic nesciunt incidunt commodi delectus nostrum? Voluptatum perspiciatis sequi nobis, voluptates aperiam recusandae omnis ullam, reprehenderit labore tempore et! Tenetur accusantium tempore quibusdam, minima vel, neque ullam magnam cumque at quo corporis. Rerum consequuntur voluptatibus minima eligendi, quibusdam, doloremque quisquam excepturi est quam autem sunt suscipit tempore dolores quas provident! Recusandae, fugiat officiis deleniti quibusdam perferendis maiores! Doloribus obcaecati ipsum dicta maiores?
                </p>
                <img className="close" onclick="closeTab(event)" src="/assets/xmark-solid.svg" alt="xmark"/>
            </article>

            <article id="about" className="tab">
                <h2 className="major">About</h2>
                <img className="cover" src="/assets/tab-3.jpg" alt="tab-2"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, eum possimus explicabo repellat impedit eius omnis sapiente? Libero aperiam ut, sint quasi sapiente nesciunt quibusdam fugit voluptas placeat architecto deleniti doloremque quidem vel, eum iure adipisci incidunt. <br/>
                    <br/>Hic nesciunt incidunt commodi delectus nostrum? Voluptatum perspiciatis sequi nobis, voluptates aperiam recusandae omnis ullam, reprehenderit labore tempore et! Tenetur accusantium tempore quibusdam, minima vel, neque ullam magnam cumque at quo corporis. Rerum consequuntur voluptatibus minima eligendi, quibusdam, doloremque quisquam excepturi est quam autem sunt suscipit tempore dolores quas provident! Recusandae, fugiat officiis deleniti quibusdam perferendis maiores! Doloribus obcaecati ipsum dicta maiores?
                </p>
                <img className="close" onclick="closeTab(event)" src="/assets/xmark-solid.svg" alt="xmark"/>
            </article>

            <article id="contact" className="tab">
                <h2 className="major">Contact</h2>
                <img className="cover" src="/assets/tab-4.jpg" alt="tab-2"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, eum possimus explicabo repellat impedit eius omnis sapiente? Libero aperiam ut, sint quasi sapiente nesciunt quibusdam fugit voluptas placeat architecto deleniti doloremque quidem vel, eum iure adipisci incidunt. <br/>
                    <br/>Hic nesciunt incidunt commodi delectus nostrum? Voluptatum perspiciatis sequi nobis, voluptates aperiam recusandae omnis ullam, reprehenderit labore tempore et! Tenetur accusantium tempore quibusdam, minima vel, neque ullam magnam cumque at quo corporis. Rerum consequuntur voluptatibus minima eligendi, quibusdam, doloremque quisquam excepturi est quam autem sunt suscipit tempore dolores quas provident! Recusandae, fugiat officiis deleniti quibusdam perferendis maiores! Doloribus obcaecati ipsum dicta maiores?
                </p>
                <img className="close" onclick="closeTab(event)" src="/assets/xmark-solid.svg" alt="xmark"/>
            </article>
        </main>
    </>
  )
}

export default App
