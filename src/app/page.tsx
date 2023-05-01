import React from 'react'
import Head from './head'
import Dropdown from './dropdown'
export default function page() {
  return (

    // main div

    <div>
      <Head/>

      {/* head nav start */}

      <div className=' bg-white w-full shadow-md shadow-black sticky z-20 bg-transparent inset-0  backdrop-blur-md'>
        <div className=' flex justify-start pt-4 pl-4 '>
          <div>
            <img src='/image/2.png' className=' pb-4 w-16 h-20'>
            </img>
          </div>
        </div>
        <nav className=' text-black flex m:justify-center l:justify-center ll:justify-center lll:justify-center s:justify-end ss:justify-end justify-end w-full mt-[-53px]'>
          <div className='pb-6 pt-3 invisible ss:invisible s:invisible m:visible l:visible ll:visible lll:visible'>
        <a href='#home' className=' p-3 font-bold hover:p-4 hover:font-extrabold hover:bg-slate-100'>Home</a>
        <a href='#about' className=' p-3 font-bold hover:p-4 hover:font-extrabold hover:bg-slate-100'>About</a>
        <a href='#academic' className=' p-3 font-bold hover:p-4 hover:font-extrabold hover:bg-slate-100'>Academic</a>
        <a href='#contact' className=' p-3 font-bold hover:p-4 hover:font-extrabold hover:bg-slate-100'>Contact</   a>
        </div>
         <div className=' flex '>
         <div className=' mr-3 mt-[-8px] '>
           <Dropdown/>
         </div>
         </div>
        </nav>
      </div>

      {/* head nav end */}

      {/* home start */}

      <div id="home" className=" flex justify-center w-full bg-[#050a2f]  ss:h-[970px] s:h-[800px] m:h-[800px] l:h-[800px]  ll:h-[800px] lll:h-[650px] ">
          <div className=" flex  ss:justify-center s:justify-center m:justify-center l:justify-center ll:justify-center lll:justify-center">
              <div className="justify-center">
                  <div className="w-full ">
                      <div className=" pt-32 pb-48 text-center  header-content">
                          <h1 className="mb-5 text-3xl font-bold leading-tight text-white l:text-6xl ll:text-6xl lll:text-6xl m:text-5xl">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar </h1>
                          <p className="px-5 mb-10 text-lg m:text-2xl l:text-2xl ll:text-2xl lll:text-2xl font-semibold text-white">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. </p>
                          <ul className="flex flex-wrap justify-center">
                            <li className='mb-10'><a className="mx-3 font-semibold main-btn z-20 hover:font-bold   bg-white p-3 hover:text-black hover:p-4 gradient-btn rounded-3xl" href='https://www.piaic.org/' target='_blank' >GET IN TOUCH</a></li>
                            <li><a className="mx-3 font-semibold   main-btn z-20  bg-white p-3    hover:font-bold hover:text-black hover:p-4 gradient-btn video-popup rounded-3xl" href="https://www.youtube.com/watch?v=fKhY3mu8hx4" target='_blank'>WATCH THE VIDEO <i className="ml-2 lni-play"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div> 
          </div>
      </div> 

      {/* home end */}

      {/* curved start */}

      <div className="curved">
      </div>

      {/* curved end */}

      {/* About start */}

      <div id="about" className=" bg-white pt-16 lll:py-40 l:py-40 ll:py-40 ">
             <div className=" mx-3">
                 <div className="pb-10 section-title">
                     <h1 className=" text-gray-900 mt-24 ml-4 font-bold text-5xl border-b border-b-gray-400">About</h1>
                     <p className=" text-gray-700 ml-4 font-semibold text-lg mt-8 mr-4">Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet
                        President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained
                        Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
                 </div> 
             </div> 
 </div>
      
      {/* about end */}

     {/* Academic start */}

     <div id="academic" className="bg-gray-100 pt-16 py-120 ">
         <div className="flex justify-center">
             <div className="w-full mx-3">
                 <div className="pb-10 text-center">
                     <h1 className=" text-gray-900 mt-24 ml-4 font-bold text-5xl border-b border-b-gray-400 ">Academic</h1>
                     <p className="text-gray-700 ml-4 font-semibold text-lg mt-8 mr-4">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>
                 </div> 
             </div>
         </div>
     </div> 

       {/* Academic end */}

     {/* comman tarck start */}

     <div className='flex justify-center  px-3 bg-gray-100 '>
       <h1 className="text-gray-900 mt-20 ml-4 font-bold text-2xl">Comman Tracks</h1>
     </div> 

      {/* comman track end */}

      {/* slides start */}
      
      <div className="bg-gray-100 carousel pb-8  w-full  ">
  <div id="slide1" className="carousel-item relative pt-12 w-full">
  <div className="text-center mx-2 shadow-lg shadow-black bg-[#bfdbfe] pt-8 h-96 w-full   rounded-3xl">
  <div className='ss:mt-10 mt-16'>
    <h1 className=" text-gray-900   font-semibold text-2xl">Quarter I </h1>
    <span className="flex justify-center"><img className='hover:p-2 w-24 h-24' src='/image/4.png' alt='typescript'></img></span>
    <p className="text-gray-700 font-semibold text-sm mt-3">CS-101: Object-Oriented Programming <br></br> using TypeScript and Typescript for React <br></br> Duration 13 Weeks</p>
  </div>
</div>
    <div className="absolute flex justify-between ss:hidden s:hidden m:hidden transform-translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative pt-12 w-full">
  <div className="text-center  shadow-lg shadow-black bg-[#bfdbfe]  pt-8 h-96 w-full mx-2 rounded-3xl">
  <div className='ss:mt-10 mt-16'>
      <h1 className="text-gray-900  font-semibold text-2xl">Quarter II</h1>
      <span className="flex justify-center"><img className='hover:p-2 w-24 h-24' src='/image/1.png' alt='next.js 13'></img></span>
      <p className="text-gray-700  font-semibold text-sm mt-3">W2-201: Developing Planet-Scale <br></br> Web 2.0 Apps and APIs using Next.js 13 <br></br> Duration 13 Weeks</p>
      </div>
  </div>
    <div className="absolute flex justify-between ss:hidden  s:hidden m:hidden transform-translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative pt-12 w-full">
  <div className="text-center shadow-lg  shadow-black bg-[#bfdbfe] pt-8 h-96 w-full mx-2 rounded-3xl">
<div className='ss:mt-10 mt-16'>
    <h1 className="text-gray-900  font-semibold text-2xl">Quarter III</h1>
    <span className=" flex justify-center"><img className='hover:p-2 w-24 h-24' src='/image/5.png' alt='dollar'></img></span>
    <p className="text-gray-700 font-semibold mt-3 text-sm ">$-101: Dollar Making Bootcamp <br></br> Full-Stack Template and API Product Development <br></br> Duration 13 Weeks</p>
    </div>
</div>
    <div className="absolute flex justify-between ss:hidden s:hidden m:hidden transform-translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

  {/* slides end */}

  {/* Specialized Track start */}

  <div className='flex justify-center px-3  bg-gray-100'>
   <h1 className="text-gray-900 mt-20  ml-4  font-bold text-2xl">Specialized Tracks</h1>
  </div>

  {/* Specialized Track end */}

    {/* slides start */}

    <div className="carousel bg-gray-100 w-full">
  <div id="slide4" className="carousel-item relative w-full">
  <div className="text-center  shadow-lg mx-2 shadow-black bg-[#bfdbfe] ss:mt-3 mt-8 h-96 w-full rounded-3xl">
              <div className='ss:pt-3 pt-6'>
                  <h1 className="text-gray-900 mt-8  font-semibold text-2xl">Quarter IV</h1>
                  <span className="  flex justify-center"><img className='hover:p-2 w-24 h-24 rounded-full' src='/image/1.jpeg' alt='dollar'></img></span>
                  <p className="text-gray-700 mx-3 font-semibold ss:text-xs text-sm mt-3">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps<br></br>AI-351: Developing Planet-Scale APIs and Python Programming<br></br>CN-351: Certified Kubernetes Application Developer (CKAD)<br></br>AC-351: Ambient Computing with Voice Assistants and Matter Devices <br></br> Duration 13 Weeks</p>
                  </div>  
              </div>
    <div className="absolute flex justify-between ss:hidden s:hidden m:hidden transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide5" className="carousel-item  relative w-full">
  <div className="text-center mx-2 shadow-lg shadow-black bg-[#bfdbfe] ss:mt-3 mt-8 mb-24 h-96 w-full rounded-3xl">
 <div className='ss:pt-3 pt-6'>
     <h1 className="text-gray-900 mt-8  font-semibold text-2xl">Quarter V</h1>
     <span className="  flex justify-center"><img className='hover:p-2 w-24 h-24' src='/image/6.png' alt='dollar'></img></span>
     <p className="text-gray-700 mx-3 font-semibold ss:text-xs text-sm mt-3">MV-361: Developing Planet-Scale and Augmented Metaverse Experiences<br></br>AI-361: Deep Learning and MLOps (Machine Learning Operations)<br></br>CN-361: Developing Multi-Cloud APIs using CDK for Terraform<br></br>AC-361: Embedded Programming using C and Rust <br></br> Duration 13 Weeks</p>
  </div>
  </div>
    <div className="absolute flex justify-between ss:hidden s:hidden m:hidden transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

    {/* slides end */}

    {/* Contact start */}

    <div id="contact" className=" bg-black pt-16 ss:pt-20 s:pt-20 py-120">
             <div className="w-full">
                 <div className="pb-10 text-center">
                     <h1 className="text-gray-100 mt-24 ml-4 font-bold text-5xl border-b border-b-gray-300 ">Get In Touch</h1>
                     <p className="text-gray-200 ml-4 font-semibold text-lg mt-8 mr-4">For the Next Generation and Future of the Internet <br></br> Join a 13 Trillion Dollar Industry with 5 Billion Users</p>
                 </div>
             </div> 
 </div>

   {/* form start */}

<div>
   <div className='bg-black  flex justify-center ss:justify-center s:justify-center m:justify-center l:justify-center ll:justify-center lll:justify-center  '>
          <div>                                                                                                                                                                                                 
          <form action="#" className=" mb-4">
             <input type="text" placeholder="Name" className="w-96 s:w-80 ss:w-56 py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6 duration-300 bg-gray-50 border border-white rounded-3xl focus:border-black focus:outline-none"></input>
          </form>
          <form action="#" className=" mb-4">
              <input type="text" placeholder="Subject" className="w-96 s:w-80 ss:w-56 py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6  duration-300 bg-gray-50 border border-white rounded-3xl focus:border-black focus:outline-none"></input>
          </form>
          <form action="#" className=" mb-4">
              <input type="text" placeholder="Email" className="w-96 s:w-80 ss:w-56 py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6  duration-300 bg-gray-50 border border-white rounded-3xl focus:border-black focus:outline-none"></input>
          </form>
          <form action="#" className=" mb-4">
              <input type="text" placeholder="Phone Number" className="w-96 s:w-80 ss:w-56 py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6  duration-300 bg-gray-50 border border-white rounded-3xl focus:border-black focus:outline-none"></input>
          </form>
          <form action="#" className=" mb-4">
              <input type="text" placeholder="Your Message" className="h-44 w-96 s:w-80 ss:w-56 text-center py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6  duration-300 bg-gray-50 border border-white rounded-3xl focus:border-black focus:outline-none"></input>
          </form>
          </div> 
   </div> 
   </div>

    {/* form end */}

    {/* button start */}
     
    <div className='bg-black  flex justify-center m:justify-center l:justify-center ll:justify-center lll:justify-center'>
      <button type="submit" className="  top-0 right-0 mt-3 mb-12 mr-6 text-base m:text-lg  l:text-xl ll:text-xl lll:text-xl text-black">
        <i className="bg-gray-50 border border-white m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6  lll:py-3 lll:pl-6 lll:pr-6  rounded-3xl p-2 font-bold hover:font-extrabold text-gray-900 lni-angle-double-right">Submit</i>
      </button>
    </div>

      {/* button end */}

      {/* footer start */}

      <footer className="bg-gray-200 w-full ">
      <div className="pb-16  ">
          <div className="  pl-4 m:flex l:flex ll:flex lll:flex">

              {/* logo & social media handles start */}

                  <div className="w-full">
                      <div className="items-end justify-between block mb-8 footer-logo-support m:flex">
                          <div className="flex items-end ">
                              <a className="mt-8 h-20 w-20"><img src="/image/3.png" alt="Logo"></img></a>
                              </div> 
                          </div>
                 <ul className="flex mt-8  footer-social">
                     <li><a href="https://www.facebook.com/groups/panaverse" target='_blank'>
                            <svg className='ss:w-10 ss:h-10 w-12 h-12 p-2 hover:p-6 hover:text-black' fill="#1C2033"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z"/></svg>
                         </a> 
                     </li>
                     <li><a  href="https://www.youtube.com/@panaverse/featured" target='_blank'>
                            <svg className='ss:w-10 ss:h-10 w-12 h-12 p-2 hover:p-6 hover:text-black' fill="#1C2033" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M61.7 17.0998C61 14.3998 58.9 12.2998 56.2 11.5998C51.4 10.2998 32 10.2998 32 10.2998C32 10.2998 12.6 10.2998 7.8 11.5998C5.1 12.2998 3 14.3998 2.3 17.0998C1 21.9998 1 31.9998 1 31.9998C1 31.9998 1 42.0998 2.3 46.8998C3 49.5998 5.1 51.6998 7.8 52.3998C12.6 53.6998 32 53.6998 32 53.6998C32 53.6998 51.4 53.6998 56.2 52.3998C58.9 51.6998 61 49.5998 61.7 46.8998C63 42.0998 63 31.9998 63 31.9998C63 31.9998 63 21.9998 61.7 17.0998ZM25.8 41.2998V22.6998L41.9 31.9998L25.8 41.2998Z"/></svg>
                         </a>
                     </li>
                     <li><a href="https://twitter.com/Panaverse_edu" target='_blank'>
                            <svg className='ss:w-10 ss:h-10 w-12 h-12 p-2 hover:p-6 hover:text-black' fill="#1C2033"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M56.1 15.3L59.9 10.5C61 9.2 61.3 8.2 61.4 7.7C58.4 9.5 55.6 10.1 53.8 10.1H53.1L52.7 9.7C50.3 7.6 47.3 6.5 44.1 6.5C37.1 6.5 31.6 12.3 31.6 19C31.6 19.4 31.6 20 31.7 20.4L32 22.4L29.9 22.3C17.1 21.9 6.6 10.9 4.9 9C2.1 14 3.7 18.8 5.4 21.8L8.8 27.4L3.4 24.4C3.5 28.6 5.1 31.9 8.2 34.3L10.9 36.3L8.2 37.4C9.9 42.5 13.7 44.6 16.5 45.4L20.2 46.4L16.7 48.8C11.1 52.8 4.1 52.5 1 52.2C7.3 56.6 14.8 57.6 20 57.6C23.9 57.6 26.8 57.2 27.5 56.9C55.5 50.3 56.8 25.3 56.8 20.3V19.6L57.4 19.2C60.8 16 62.2 14.3 63 13.3C62.7 13.4 62.3 13.6 61.9 13.7L56.1 15.3Z"/></svg>
                         </a>
                     </li>
                     <li><a  href="https://github.com/panaverse" target='_blank'>
                            <svg className='ss:w-10 ss:h-10 w-12 h-12 p-2 hover:p-6 hover:text-black' fill="#1C2033" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z"/></svg>
                         </a>
                     </li>
                 </ul>
             </div> 

              {/* logo & social media handles end */}

              <div className=" pb-4 m:mx-5 l:mr-16 ll:mx-20 lll:mx-32  m:pt-3 l:pt-3 ll:pt-3 lll:pt-3 ">
                  <div className='w-full  '>
                      <div>
                          <h1 className="text-black my-5  font-bold text-base m:font-bold m:text-lg  l:font-bold l:text-2xl ll:font-bold ll:text-2xl lll:font-bold lll:text-2xl ">Company</h1>
                          <ul className='m:text-sm'>
                              <li><a href='#about'   className=' p-2 font-semibold hover:p-3 hover:font-bold '>About</a></li>
                              <li><a href='#academic' className='p-2 font-semibold hover:p-3 hover:font-bod'>Academic</a></li>
                              <li><a href='#contact' className=' p-2 font-semibold hover:p-3 hover:font-bold'>Contact</ a></li>

                          </ul>
                      </div>
                      </div>
                      </div>
                  
                      <div className="  pb-4 m:mx-5 l:mr-16 ll:mx-20 lll:mx-32 m:pt-3 l:pt-3 ll:pt-3 lll:pt-3 ">
                    <div className='w-full '>
                  <div>
                          <h1 className="text-black my-5  font-bold text-base m:font-bold m:text-lg l:font-bold l:text-2xl ll:font-bold ll:text-2xl lll:font-bold lll:text-2xl">Product & Services</h1>
                          <ul className='m:text-sm'>
                              <li><a  className='p-2 font-semibold hover:p-3 hover:font-bold'>Products</a></li>
                              <li><a className=' p-2 font-semibold hover:p-3 hover:font-bold '>Business</a></li>
                              <li><a className=' p-2 font-semibold hover:p-3 hover:font-bold'>Developer</a></li>
                          </ul>
                      
                  </div>
                  </div>
                  </div>

                  <div className=" pb-4 m:mx-5 l:mr-16 ll:mx-20 lll:mx-32 m:pt-3 l:pt-3 ll:pt-3 lll:pt-3 ">
                  <div className='w-full  '>
                  <div>
                       <h1 className="text-black py-5 font-bold text-base m:font-bold m:text-lg l:font-bold l:text-2xl ll:font-bold ll:text-2xl lll:font-bold lll:text-2xl">Help & Support</h1>
                       <ul className='m:text-sm'>
                           <li><a  className='p-2 font-semibold hover:p-3 hover:font-bold'>Support</a></li>
                           <li><a className=' p-2 font-semibold hover:p-3 hover:font-bold '>Policy</a></li>
                           <li><a className=' p-2 font-semibold hover:p-3 hover:font-bold'>FAQ</a></li>
                       </ul>
                   
                  </div>
                  </div>
             </div>
         </div> 
     </div>
     </footer>

     {/* Subscribe start */}

     <div className='flex justify-center pb-3  px-3 bg-gray-200 '>
  <h1 className="text-gray-900  font-bold text-3xl">Subscribe</h1>
</div> 

      {/* Subscribe end */}

        {/* form start */}

     <div className="w-full bg-gray-200 ">
         <div className="pb-2 pl-4 flex justify-center ">
             <div>
                 <form action="#" className=" mb-4">
                     <input type="text" placeholder="Your Email" className=" w-96 s:w-80 ss:w-56 py-1 pl-2 pr-6 m:py-3 m:pl-6 m:pr-6 l:py-3 l:pl-6 l:pr-6 ll:py-3 ll:pl-6 ll:pr-6 lll:py-3 lll:pl-6 lll:pr-6 duration-300 bg-gray-50 border border-gray-600 rounded-full focus:border-black focus:outline-none"></input>
                 </form>
             </div>
         </div> 
     </div>
      
       {/* form end */}
        
        {/* button start */}

     <div className='pb-12 bg-gray-200'>
      <div className='flex justify-center'>
     <button type="submit" className="ml-4 top-0 right-0 mr-6 text-base m:text-lg  l:text-xl ll:text-xl lll:text-xl text-black">
       <i className="bg-gray-50 border border-gray-600 rounded-3xl p-2 font-bold hover:font-extrabold text-gray-900 lni-angle-double-right">Submit</i>
      </button>
     </div>
     </div>

       {/* button end */}

      <div className="bg-[#050a2f] w-full ">
          <div className="container flex justify-center  pl-1 pr-1 ">
                      <div className="py-6   text-center">
                           <p className="text-white text-center  ss:ml-16 s:ml-16 m:ml-20 l:ml-24 ll:ml-28 lll:ml-28 "> 
                              This website made by
                              <a className="text-blue-300  ml-2 s:ml-3  m:ml-3 l:ml-3 ll:ml-4 lll:ml-4  duration-300 hover:p-2 hover:font-semibold hover:text-blue-500" href="https://github.com/MuhammadMuzammilKhan951" target='_blank'>Muhammad Muzammil Khan</a>
                          </p>
                      </div> 
         </div> 
       </div> 
    </div>
    
    // main div closed
  )
}
