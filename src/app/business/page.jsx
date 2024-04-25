'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carticon from "../../../public/cart.svg";
import Gameicon from "../../../public/game.svg";
import styles from "./home.module.css";

export default function Home() {

    return (
        <div className="home-main-container bg-white rounded-md mt-top">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div className="mx-auto max-w-2xl py-32 lg:py-top">
                    <div className="text-center">
                        <div className="flex justify-center mt-5">
                            <Link href="/business/commerce">
                                <div className={styles.iconContainer}>
                                    <Image
                                        className={styles.icon}
                                        src={Carticon}
                                        alt="cart-icon"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                            </Link>
                            <Link href="/business/gaming">
                                <div className={styles.iconContainer}>
                                    <Image
                                        className={styles.icon}
                                        src={Gameicon}
                                        alt="game-icon"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}