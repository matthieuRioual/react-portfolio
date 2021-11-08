import React from 'react'
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export const MiddleHeader = ({ openModal }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    return (
        <div className="container-fluid">
            <div className="background-header">
                <div className="overlay">

                    <div className="banner-text">
                        <h1 className="headertitle">
                            <span>Welcome in my Portfolio</span>
                        </h1>
                        &lt;
                        <i>code</i>
                        &gt;
                        I build&nbsp;
                        <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "full stack websites", "machine learning algorithms", "cloud and big data solutions","android application"]'>
                        </span>
                        &lt;/<i>code</i>&gt;
                        <div className="contacts-button">
                            <button>
                                <a href="/CV.pdf" download="cv_rioual.pdf">
                                    Dowload my CV
                                </a>
                            </button>
                            <button onClick={handleShow} style={{ "margin-left": "10px" }}>
                                Contacts
                            </button>

                            <ContactModal handleClose={handleClose} show={show}></ContactModal>
                        </div>
                    </div>
                    {/* <div>
                        <img src={image} alt="" />
                    </div> */}

                </div>
            </div>

        </div >
    )
}
