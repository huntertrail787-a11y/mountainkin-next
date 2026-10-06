import Image from "next/image";
import Header from "@/components/Header";
import JoinForm from "@/components/JoinForm";
import { EMAIL, foods, focus, pillars, waLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <div className="hero">
          <div className="wrap">
            <div>
              <div className="tag">More than mountains. It&apos;s a way of life.</div>
              <h1>The complete Himalayan lifestyle brand</h1>
              <p>Authentic Pahadi food, treks, travel and a community that keeps Himalayan roots alive. Built from Dehradun, with a love for mountains and animals.</p>
              <div className="btns">
                <a className="btn" href="#food">Explore Pahadi food</a>
                <a className="btn ghost" href="#join">Join the tribe</a>
              </div>
            </div>
            <Image src="/images/hero.jpg" width={524} height={335} priority alt="A trekker and his dog watching the sun set over the Himalayas" />
          </div>
        </div>

        <section id="why">
          <div className="wrap">
            <h2>Why choose MountainKin</h2>
            <p className="lead">We are authentic. Everything we offer comes from the mountains we live in and the people who call them home.</p>
            <div className="pillars">
              {pillars.map(([t, d]) => (
                <div key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt" id="food">
          <div className="wrap">
            <h2>Authentic Pahadi food, from the mountains to your kitchen</h2>
            <p className="lead">Pure, natural and local. Millets, pulses, spices and mountain flavours that fuel a better you.</p>
            <div className="food">
              <Image className="a" src="/images/ragi.jpg" width={355} height={318} alt="Ragi porridge topped with nuts and seeds in a wooden bowl" />
              <div className="col">
                <Image src="/images/products.jpg" width={514} height={125} alt="MountainKin Himalayan honey and ragi jars" />
                <p>Our range brings back the wholesome grains Pahadi families have eaten for generations, and makes them easy to cook in any kitchen.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <div className="wrap">
            <h2>What each food gives you</h2>
            <p className="lead">Simple, honest nutrition. Order any item on WhatsApp.</p>
            <div className="rows">
              {foods.map((f) => (
                <div className="row" key={f.name}>
                  <h3>{f.name}<small>{f.sub}</small></h3>
                  <p>{f.benefit}</p>
                  <p>{f.use}</p>
                  <a href={waLink(`I want to order ${f.name}`)}>Order</a>
                </div>
              ))}
            </div>
            <p className="note">Nutrition information is general and not medical advice. If you have a health condition or need a strictly gluten-free diet, check labels and speak to your doctor.</p>
          </div>
        </section>

        <section className="alt" id="treks">
          <div className="wrap">
            <h2>Explore more of the Himalayas</h2>
            <p className="lead">Treks and holiday packages that take you to the unexplored.</p>
            <div className="duo">
              <div>
                <Image src="/images/treks.jpg" width={318} height={233} alt="Trekkers walking a mountain trail with snow peaks behind" />
                <h3>Treks and adventures</h3>
                <p>Guided trails for every level, led by people who know the mountains.</p>
              </div>
              <div>
                <Image src="/images/holiday.jpg" width={334} height={233} alt="A wooden mountain home below Himalayan peaks" />
                <h3>Holiday and travel packages</h3>
                <p>Stay in the hills and experience the Himalayas the local way.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="comm" id="community">
          <div className="wrap">
            <div className="top">
              <Image src="/images/dogs.jpg" width={494} height={200} alt="Two German Shepherds resting on a mountain meadow" />
              <div>
                <h2>A tribe that cares</h2>
                <p className="lead">MountainKin is also a community we are building to spread awareness and happiness, keep our mountains clean, help people in need and look after animals.</p>
              </div>
            </div>
            <ul className="focus">
              {focus.map(([t, d]) => (
                <li key={t}><strong>{t}</strong>{d}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="join" id="join">
          <div className="wrap">
            <div>
              <h2>Join the MountainKin tribe</h2>
              <p className="lead">Be part of a growing community of people, dogs and dreamers. Tell us how you&apos;d like to help and we&apos;ll get in touch on WhatsApp.</p>
            </div>
            <JoinForm />
          </div>
        </section>

        <Image className="band" src="/images/peaks.jpg" width={1024} height={145} alt="Himalayan snow peaks at sunset" />
        <section id="gallery">
          <div className="wrap">
            <h2>Life with MountainKin</h2>
            <div className="gal">
              <Image className="w t" src="/images/hero.jpg" width={524} height={335} alt="Trekker and dog watching the Himalayan sunset" />
              <Image src="/images/pouch.jpg" width={231} height={170} alt="MountainKin ragi pack" />
              <Image src="/images/jars.jpg" width={375} height={125} alt="Himalayan honey and ragi jars" />
              <Image className="w" src="/images/treks.jpg" width={318} height={233} alt="Trekkers on a mountain trail" />
              <Image className="w" src="/images/ragi.jpg" width={355} height={318} alt="Ragi porridge bowl" />
              <Image src="/images/holiday.jpg" width={334} height={233} alt="Mountain home in the Himalayas" />
              <Image src="/images/sunset.jpg" width={500} height={165} alt="Mountain valley at golden hour" />
              <Image className="w" src="/images/dogs.jpg" width={494} height={200} alt="German Shepherds on the meadow" />
              <Image className="w" src="/images/products.jpg" width={514} height={125} alt="Authentic Pahadi products" />
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <h2>Order or ask us anything</h2>
            <p className="lead">Tell us what you need and we&apos;ll reply with availability and delivery details.</p>
            <p style={{ marginTop: 18 }}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
              Dehradun, Uttarakhand, India<br />
              Instagram and Facebook: @mountainkin
            </p>
            <p style={{ marginTop: 22 }}><a className="btn" href={waLink()}>Chat on WhatsApp</a></p>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">&copy; {new Date().getFullYear()} MountainKin. Welcome to MountainKin.</div>
      </footer>
    </>
  );
}
