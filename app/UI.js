"use client"
import styles from './styles.module.scss'

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

import ResizeListener from "@/lib/ResizeListener"

export default function Index({ dataHomePage }) {
  ////////////////////////////////
  // RETURN
  return (
    <>
      <main className={styles.root}>
        <video src='/images/output.mp4' autoPlay muted loop playsInline></video>
      </main>
    </>

  )
}


