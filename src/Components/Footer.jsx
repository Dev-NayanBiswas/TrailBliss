import React from "react";
import ImageUploader from "../Utilities/Scripts/ImageUploader";
import { RiGithubFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200/25 text-base-content p-10 mt-20 rounded-lg">
  <aside>
    <figure className="h-20 aspect-1">
    <img className="h-full w-full object-cover" src={ImageUploader("logo.webp")} alt="" />
    </figure>
    <p className="md:text-3xl text-xl font-semibold text-[var(--primary-color)]">
      TrailBliss
    </p>
    
    <p className="text-lg text-blue-400 italic font-semibold">Serving nature since 1999</p>
    <section className="flex gap-2 items-center">
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank"><FaFacebook size={30} fill="#1877F2"/></a>
        <a href="https://github.com/Dev-NayanBiswas" target="_blank"><RiGithubFill size={30} /></a>
        <a href="https://www.linkedin.com/in/nayan-biswas1996/" target="_blank"><FaLinkedinIn size={30} fill="#1877F2"/></a>
    </section>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by TrailBliss Ltd</p>
  </aside>
</footer>
    </>
  );
}

export default Footer;
