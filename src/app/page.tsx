import { Metadata } from 'next';
import { Navbar, Searchbar } from '../components'
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

function Page() {
  return (
      <div className="flex flex-col item-center gap-2">
          <Navbar/>
          <Image src={'/images/landing.png'} width={1440} height={254} className="w-full object-cover mt-10"
                 alt={"zmart"}/>
          <div style={{
              width: '100%',
              height: '100%',
              paddingTop: 33,
              paddingBottom: 33,
              paddingLeft: 66,
              paddingRight: 67,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              display: 'inline-flex'
          }}>
              <div style={{
                  color: 'black',
                  fontSize: 60,
                  fontFamily: 'Poppins',
                  fontWeight: '700',
                  wordWrap: 'break-word'
              }}>Our support
              </div>
              <div style={{
                  width: 1200,
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  wordWrap: 'break-word'
              }}>Merupakan misi Zmart untuk membantu mengurangi masalah sampah makanan rumah tangga Indonesia yang sudah sangat menggunung. Bersama-sama kita sayangi lingkungan dengan memaksimalkan konsumsi bahan pangan dari supermarket favoritmu. Zmart menjamin kualitas bahan makanan agar tetap layak diolah menjadi masakan untuk keluarga di rumah. Temukan juga resep makanan lezat yang dapat diolah dari keranjangmu!
              </div>
          </div>
          <div className="w-full flex space-x-4 p-4">
              <div style={{
                  width: '100%',
                  height: '100%',
                  paddingLeft: 150,
                  paddingRight: 150,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'inline-flex'
              }}>
                  <div style={{
                      width: 530,
                      height: 334,
                      position: 'relative',
                      background: '#F0F3F7',
                      boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.10)',
                      borderRadius: 20,
                      marginRight: 15,
                  }}>
                      {/*button*/}
                      <img style={{
                          width: 147,
                          height: 150.50,
                          left: 53,
                          top: 50,
                          position: 'absolute',
                          borderRadius: 9999
                      }} src="images/testi-1.png"/>
                      <div style={{
                          left: 225,
                          top: 80,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 12,
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          wordWrap: 'break-word'
                      }}>44 tahun, Aktivis Lingkungan
                      </div>
                      <div style={{
                          width: 284,
                          left: 225,
                          top: 125,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 15,
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          wordWrap: 'break-word',
                          paddingRight: 30,
                      }}>“Di Zmart, selain belanja kebutuhan sehari-hari, juga bisa turut mendukung gerakan zero
                          waste.”
                      </div>
                      <div style={{
                          left: 225,
                          top: 42,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 25,
                          fontFamily: 'Poppins',
                          fontWeight: '600',
                          wordWrap: 'break-word'
                      }}>Hamish Daud
                      </div>
                      <Link legacyBehavior href="../bahan">
                          <a
                              style={{
                                  width: 140,
                                  height: 35,
                                  background: 'linear-gradient(243deg, #ABCB92 0%, #4EA339 97%)',
                                  boxShadow: '0px 0px 10px 1px rgba(196.62, 231.80, 168.98, 0.80)',
                                  borderRadius: 3,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginTop: '10px',
                                  position: 'absolute',
                                  bottom: 20,
                                  left: 180,
                                  padding: '10px 20px',
                                  color: 'white',
                                  textDecoration: 'none',
                                  fontFamily: 'Poppins',
                                  fontSize: 14,
                                  fontWeight: '500',
                              }}
                          >
                              Lihat Bahan
                          </a>
                      </Link>
                  </div>
                  <div style={{
                      width: 530,
                      height: 334,
                      position: 'relative',
                      background: '#F0F3F7',
                      boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.10)',
                      borderRadius: 20,
                      marginLeft: 15,
                  }}>
                      <img style={{
                          width: 147,
                          height: 150.50,
                          left: 53,
                          top: 50,
                          position: 'absolute',
                          borderRadius: 9999
                      }} src="images/testi-2.png"/>
                      <div style={{
                          left: 225,
                          top: 80,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 12,
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          wordWrap: 'break-word'
                      }}>47 tahun, Ibu Rumah Tangga
                      </div>
                      <div style={{
                          width: 284,
                          left: 225,
                          top: 109,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 15,
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          wordWrap: 'break-word',
                          paddingRight: 30,
                      }}>“Bahan yang sudah dibeli dapat langsung diolah karena ada resep-resep yang disediakan Zmart.
                          Dengan porsi yang disesuaikan sehingga tidak ada food waste.”
                      </div>
                      <div style={{
                          left: 225,
                          top: 42,
                          position: 'absolute',
                          color: 'black',
                          fontSize: 25,
                          fontFamily: 'Poppins',
                          fontWeight: '600',
                          wordWrap: 'break-word'
                      }}>Gita Gempita
                      </div>
                      <Link legacyBehavior href="../resep">
                          <a
                              style={{
                                  width: 140,
                                  height: 35,
                                  background: 'linear-gradient(243deg, #ABCB92 0%, #4EA339 97%)',
                                  boxShadow: '0px 0px 10px 1px rgba(196.62, 231.80, 168.98, 0.80)',
                                  borderRadius: 3,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginTop: '10px',
                                  position: 'absolute',
                                  bottom: 20,
                                  left: 180,
                                  padding: '10px 20px',
                                  color: 'white',
                                  textDecoration: 'none',
                                  fontFamily: 'Poppins',
                                  fontSize: 14,
                                  fontWeight: '500',
                              }}
                          >
                              Lihat Resep
                          </a>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Page;