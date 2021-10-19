import React from 'react'
import { FlippingCard } from './FlippingCard'
import "./styles/project.css"

export const Projects = () => {
    return (
        <div className="card-container">
            <FlippingCard language_name="python" color1="#3773a5" color2="#ffd637" projects={["space invader", "snake", "hangman"]}></FlippingCard>
            <FlippingCard language_name="c" color1="#9fa4c4" color2="#9e768f"></FlippingCard >
            <FlippingCard language_name="java" color1="#e86f00" color2="#5283a2"></FlippingCard>
            <FlippingCard language_name="javascript" color1="rgb(247 224 24)" color2="rgb(247 224 25)"></FlippingCard>
        </div>
    )
}
