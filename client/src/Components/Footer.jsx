import React from 'react'
import {Footer} from 'flowbite-react'
import {BsDiscord, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import {SiCodeforces, SiLeetcode, SiLinkedin} from 'react-icons/si'
import {Link} from "react-router-dom"

export default function FooterCom(){
    return <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='font-bold dark:text-white text-4xl'>
                  <span className='px-2 py-1 bg-gradient-to-r from from-indigo-500  via-purple-500 to-pink-500 rounded-lg text-white'>Rahul's</span>
                  Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://Rahul1971.github.io/Rahul-Portfolio/' target='_blank' rel='noopener norefere' >
                            My Portfolio
                        </Footer.Link>
                        <Footer.Link href='/about' target='_blank' rel='noopener norefere' >
                            Rahul's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='http://www.github.com/Rahul1971' target='_blank' rel='noopener norefere' >
                            Github
                        </Footer.Link>
                        <Footer.Link href='https://leetcode.com/Rahul_1357/' target='_blank' rel='noopener norefere' >
                            LeetCode
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Privacy Policy'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener norefere' >
                            Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider></Footer.Divider>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Rahul's Blog" year={new Date().getFullYear()}></Footer.Copyright>
            </div>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='https://leetcode.com/u/RahulYadav117/' icon={SiLeetcode}></Footer.Icon>
                <Footer.Icon href='https://www.linkedin.com/in/rahul-yadav-a88100231/' icon={SiLinkedin}></Footer.Icon>
                <Footer.Icon href='https://github.com/Rahul-2101' icon={BsGithub}></Footer.Icon>
                <Footer.Icon href='#' icon={BsDiscord}></Footer.Icon>
            </div>
        </div>
    </Footer>
}