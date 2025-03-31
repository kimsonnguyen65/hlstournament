"use client"
import styles from './styles.module.scss'
import React, { useEffect, useRef } from "react"
import ResizeListener from "@/lib/ResizeListener"
import RoutesList from "@/app/components/RoutesList"

export default function HomePage({ dataHomePage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Optimize video loading
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <main className={styles.root}>
      <video
        ref={videoRef}
        src='/images/output.mp4'
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
        preload="auto"
      />
      <RoutesList />
    </main>
  )
}


