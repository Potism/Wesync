import Link from 'next/link';

import { Separator } from '@/components/Separator';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Education = () => (
  <div className="body-font bg-gray-100 font-grotensk antialiased">
    <Navbar reverse></Navbar>
    <div className="bottom-border-radius overflow-hidden">
      <Background color="bg-gray-100">
        <Section yPadding="py-12">
          <header>
            <div className="py-36 sm:py-48">
              <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-emerald-900 px-3 py-0.5">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <p className="font-medium text-green-200">
                  EXPERIENCE & SKILLS
                </p>
              </div>
              <h1 className="space-pre-line py-6 text-6xl leading-none text-gray-800 sm:text-8xl">
                Learn from industry <br />
                leaders and become <br />
                an expert.
              </h1>
            </div>

            <Separator />
          </header>
        </Section>
      </Background>
    </div>
    <Background color="bg-gray-900">
      <Section yPadding="py-48">
        <header className="h-full">
          <div className="flex flex-row justify-start">
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-0.5">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <p className="font-medium text-green-800">IMPROVE YOUR TEAM</p>
            </div>
          </div>
          <h1 className="white space-pre-line py-6 text-5xl leading-none text-white sm:text-7xl">
            Need in house <br />
            teaching?
          </h1>
          <div className="grid grid-cols-1 gap-4 py-20 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {/* First Row */}
            <div className="col-span-1 rounded-md bg-zinc-800 bg-[url('../../public/assets/images/Closed.png')] bg-repeat px-5 pb-5 pt-48 text-white transition duration-500 hover:scale-105 sm:col-span-2 md:col-span-1 lg:col-span-2">
              <span className="text-5xl leading-none">
                We teach teams to boost <br></br> performance.
              </span>
              <p className="text-xl text-gray-400">
                Elevate your dev team&apos;s performance with our tailored
                training: hands-on coaching, industry best practices, and
                collaborative learning to maximize efficiency and innovation.
              </p>
            </div>

            {/* Second Row */}
            <div className="col-span-1 rounded-md bg-zinc-800 px-5 pb-5 pt-24 text-white transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <div className="flex flex-row justify-start">
                <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <p className="font-medium text-green-200">
                    DEVELOP YOUR CAREER
                  </p>
                </div>
              </div>
              <span className="text-5xl leading-none">1 on 1 boost</span>
              <p className="text-gray-400">
                Elevate your dev team&apos;s performance with our tailored
                training: hands-on coaching, industry best practices, and
                collaborative learning to maximize efficiency and innovation.
              </p>
            </div>

            <div className="col-span-1 rounded-md bg-zinc-800 p-4 px-5 pb-5 pt-24 text-white transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-0.5">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <p className="font-medium text-green-200">
                  DEVELOP YOUR CAREER
                </p>
              </div>
              <span className="text-5xl leading-none">Team teaching</span>
              <p className="text-gray-400">
                Elevate your dev team&apos;s performance with our tailored
                training: hands-on coaching, industry best practices, and
                collaborative learning to maximize efficiency and innovation.
              </p>
            </div>

            {/* Third Row */}
            <div className="col-span-1 rounded-lg bg-gray-200 p-4 transition duration-500 hover:scale-105 sm:col-span-2 md:col-span-1 lg:col-span-2">
              <div className="flex flex-row justify-between">
                <span className="text-md font-extrabold text-gray-900 sm:text-3xl">
                  Boost your team with wesync
                </span>
                <button className="btn btn-ghost rounded-full bg-green-200 leading-none text-green-800 sm:px-20">
                  <Link href="mailto:hello@wesync.dev">LET&apos;S START</Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      </Section>
    </Background>
    <div className="border-top-radius overflow-hidden">
      <Background color="bg-zinc-50">
        <div className="pt-10">
          <Separator />
        </div>
        <Section yPadding="py-24">
          <header className="h-full">
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 py-0.5">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <p className="font-bold text-green-800">BECOME A WEB DEVELOPER</p>
            </div>
            <h1 className="space-pre-line pt-6 text-6xl leading-none text-black sm:text-8xl">
              Join webstack academy.
            </h1>
            <div className="grid grid-cols-1 gap-4 rounded-lg py-24 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
              {/* First Row */}
              <div className="col-span-1 rounded-lg bg-zinc-200 px-6 pb-6 pt-24 transition duration-500 hover:scale-105 sm:col-span-2">
                <svg
                  width="64"
                  height="45"
                  viewBox="0 0 64 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    y="0.560059"
                    width="64"
                    height="44.44"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1136_11603"
                        transform="scale(0.0138889 0.020002)"
                      />
                    </pattern>
                    <image
                      id="image0_1136_11603"
                      width="72"
                      height="50"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAyCAYAAAD/VJ3gAAAMPmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEAIEEBASuhNEKkBpITQAkjvNkISIJQYA0HFjiwquBZULGBDV0UUO82O2FkUe18sqCjrYsGuvEkBXfeV753vm3v/+8+Z/5w5d24ZAGjHuWJxLqoBQJ6oQBIbEsBITkllkJ4CBKgCGhgBrLi8fDErOjoCQBs8/93eXYfe0K44yLT+2f9fTZMvyOcBgERDnM7P5+VBfAAAvJonlhQAQJTx5lMKxDIMG9CWwAQhXiDDmQpcLcPpCrxH7hMfy4a4DQAVNS5XkgmA+iXIMwp5mVBDvQ9iJxFfKAKAxoDYNy9vEh/iNIhtoI8YYpk+M/0Hncy/aaYPaXK5mUNYMRe5qQQK88W53Gn/Zzn+t+XlSgdjWMGmliUJjZXNGdbtZs6kcBlWg7hXlB4ZBbEWxB+EfLk/xCglSxqaoPBHDXn5bFgzoAuxE58bGA6xIcTBotzICCWfniEM5kAMVwg6VVjAiYdYD+IFgvygOKXPRsmkWGUstCFDwmYp+bNciTyuLNZ9aU4CS6n/OkvAUepj6kVZ8UkQUyC2KBQmRkKsDrFjfk5cuNJndFEWO3LQRyKNleVvAXGsQBQSoNDHCjMkwbFK/7K8/MH5YhuzhJxIJd5XkBUfqqgP1sbjyvOHc8EuCUSshEEdQX5yxOBc+ILAIMXcsWcCUUKcUueDuCAgVjEWp4hzo5X+uJkgN0TGm0Hsml8YpxyLJxbABanQxzPEBdHxijzxomxuWLQiH3wpiABsEAgYQApbOpgEsoGwo7exF14peoIBF0hAJhAAByUzOCJJ3iOCxzhQBP6ESADyh8YFyHsFoBDyX4dYxdEBZMh7C+UjcsATiPNAOMiF11L5KNFQtETwGDLCf0TnwsaD+ebCJuv/9/wg+51hQSZCyUgHIzJog57EIGIgMZQYTLTFDXBf3BuPgEd/2JxxJu45OI/v/oQnhE7CQ8I1Qhfh1kRhseSnLMeALqgfrKxF+o+1wK2gphsegPtAdaiM6+IGwAF3hXFYuB+M7AZZtjJvWVUYP2n/bQY/3A2lH9mJjJKHkf3JNj+PVLdTdxtSkdX6x/oock0fqjd7qOfn+Owfqs+H5/CfPbEF2H7sDHYCO4cdxhoBAzuGNWHt2BEZHlpdj+WrazBarDyfHKgj/Ee8wTsrq2S+U51Tj9MXRV+BYKrsHQ3Yk8TTJMLMrAIGC34RBAyOiOc4guHs5OwCgOz7onh9vYmRfzcQ3fbv3Lw/APA5NjAwcOg7F3YMgL0e8PFv/s7ZMOGnQxWAs808qaRQweGyAwG+JWjwSdMHxsAc2MD5OAN34A38QRAIA1EgHqSACTD7LLjOJWAKmAHmglJQDpaClWAt2AA2g+1gF9gHGsFhcAKcBhfAJXAN3IGrpxu8AH3gHfiMIAgJoSJ0RB8xQSwRe8QZYSK+SBASgcQiKUgakomIECkyA5mHlCMVyFpkE1KL7EWakRPIOaQTuYU8QHqQ18gnFEPVUG3UCLVCR6JMlIWGo/HoeDQTnYwWoSXoYnQ1WoPuRBvQE+gF9Brahb5A+zGAqWK6mCnmgDExNhaFpWIZmASbhZVhlVgNVo+1wPt8BevCerGPOBGn4wzcAa7gUDwB5+GT8Vn4Inwtvh1vwNvwK/gDvA//RqASDAn2BC8Ch5BMyCRMIZQSKglbCQcJp+Cz1E14RyQSdYnWRA/4LKYQs4nTiYuI64i7iceJncRHxH4SiaRPsif5kKJIXFIBqZS0hrSTdIx0mdRN+qCiqmKi4qwSrJKqIlIpVqlU2aFyVOWyylOVz2QNsiXZixxF5pOnkZeQt5BbyBfJ3eTPFE2KNcWHEk/JpsylrKbUU05R7lLeqKqqmql6qsaoClXnqK5W3aN6VvWB6kc1LTU7NbbaODWp2mK1bWrH1W6pvaFSqVZUf2oqtYC6mFpLPUm9T/2gTld3VOeo89Vnq1epN6hfVn9JI9MsaSzaBFoRrZK2n3aR1qtB1rDSYGtwNWZpVGk0a9zQ6Neka47SjNLM01ykuUPznOYzLZKWlVaQFl+rRGuz1kmtR3SMbk5n03n0efQt9FP0bm2itrU2Rztbu1x7l3aHdp+Olo6rTqLOVJ0qnSM6XbqYrpUuRzdXd4nuPt3rup+GGQ1jDRMMWzisftjlYe/1huv56wn0yvR2613T+6TP0A/Sz9Ffpt+of88AN7AziDGYYrDe4JRB73Dt4d7DecPLhu8bftsQNbQzjDWcbrjZsN2w38jYKMRIbLTG6KRRr7Gusb9xtvEK46PGPSZ0E18TockKk2Mmzxk6DBYjl7Ga0cboMzU0DTWVmm4y7TD9bGZtlmBWbLbb7J45xZxpnmG+wrzVvM/CxGKMxQyLOovblmRLpmWW5SrLM5bvraytkqzmWzVaPbPWs+ZYF1nXWd+1odr42Uy2qbG5aku0Zdrm2K6zvWSH2rnZZdlV2V20R+3d7YX26+w7RxBGeI4QjagZccNBzYHlUOhQ5/DAUdcxwrHYsdHx5UiLkakjl408M/Kbk5tTrtMWpzujtEaFjSoe1TLqtbOdM8+5yvmqC9Ul2GW2S5PLK1d7V4HretebbnS3MW7z3Vrdvrp7uEvc6917PCw80jyqPW4wtZnRzEXMs54EzwDP2Z6HPT96uXsVeO3z+svbwTvHe4f3s9HWowWjt4x+5GPmw/XZ5NPly/BN893o2+Vn6sf1q/F76G/uz/ff6v+UZcvKZu1kvQxwCpAEHAx4z/Ziz2QfD8QCQwLLAjuCtIISgtYG3Q82C84MrgvuC3ELmR5yPJQQGh66LPQGx4jD49Ry+sI8wmaGtYWrhceFrw1/GGEXIYloGYOOCRuzfMzdSMtIUWRjFIjiRC2PuhdtHT05+lAMMSY6pirmSeyo2BmxZ+LocRPjdsS9iw+IXxJ/J8EmQZrQmkhLHJdYm/g+KTCpIqkreWTyzOQLKQYpwpSmVFJqYurW1P6xQWNXju0e5zaudNz18dbjp44/N8FgQu6EIxNpE7kT96cR0pLSdqR94UZxa7j96Zz06vQ+Hpu3iveC789fwe8R+AgqBE8zfDIqMp5l+mQuz+zJ8suqzOoVsoVrha+yQ7M3ZL/PicrZljOQm5S7O08lLy2vWaQlyhG1TTKeNHVSp9heXCrumuw1eeXkPkm4ZGs+kj8+v6lAG/7It0ttpL9IHxT6FlYVfpiSOGX/VM2poqnt0+ymLZz2tCi46Lfp+HTe9NYZpjPmzngwkzVz0yxkVvqs1tnms0tmd88JmbN9LmVuztzfi52KK4rfzkua11JiVDKn5NEvIb/UlaqXSkpvzPeev2EBvkC4oGOhy8I1C7+V8cvOlzuVV5Z/WcRbdP7XUb+u/nVgccbijiXuS9YvJS4VLb2+zG/Z9grNiqKKR8vHLG9YwVhRtuLtyokrz1W6Vm5YRVklXdW1OmJ10xqLNUvXfFmbtfZaVUDV7mrD6oXV79fx111e77++foPRhvINnzYKN97cFLKpocaqpnIzcXPh5idbErec+Y35W+1Wg63lW79uE23r2h67va3Wo7Z2h+GOJXVonbSuZ+e4nZd2Be5qqneo37Rbd3f5HrBHuuf53rS91/eF72vdz9xff8DyQPVB+sGyBqRhWkNfY1ZjV1NKU2dzWHNri3fLwUOOh7YdNj1cdUTnyJKjlKMlRweOFR3rPy4+3nsi88Sj1omtd04mn7zaFtPWcSr81NnTwadPnmGdOXbW5+zhc17nms8zzzdecL/Q0O7WfvB3t98Pdrh3NFz0uNh0yfNSS+fozqOX/S6fuBJ45fRVztUL1yKvdV5PuH7zxrgbXTf5N5/dyr316nbh7c935twl3C27p3Gv8r7h/Zo/bP/Y3eXedeRB4IP2h3EP7zziPXrxOP/xl+6SJ9QnlU9NntY+c352uCe459Lzsc+7X4hffO4t/VPzz+qXNi8P/OX/V3tfcl/3K8mrgdeL3ui/2fbW9W1rf3T//Xd57z6/L/ug/2H7R+bHM5+SPj39POUL6cvqr7ZfW76Ff7s7kDcwIOZKuPJfAQw2NCMDgNfbAKCmAECH+zPKWMX+T26IYs8qR+A/YcUeUW7uANTD//eYXvh3cwOAPVvg9gvq08YBEE0FIN4ToC4uQ21wrybfV8qMCPcBG6O/puelg39jij3nD3n/fAYyVVfw8/lfGs58d7GFcKsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAEigAwAEAAAAAQAAADIAAAAAAJucuwAAB0xJREFUaAXtW2tsFFUUvnd2aVnaYrtFy0J5SMvyaItCjXQxgQrSlkdEK1V5aAyWmIoYQCL+QQr+kRBaxYg/WBITlaCIGAiBEiOUBAsai1CKD0oTBcIPbOUlBikdz9n1TM9Opzsz223pNr3J9j7OY8757jln7uxOpTBoD+S+WqCoYp6Uwqeq0gt9ggFbj116450Lm1fP3rs6GgY6uZK0SWV5UsptUshsIYMUACfmWly8utRfMyf+5bz9r4P9amccUEg4bWLZckUo1QFwaDFGexUxkeI1/4nZH6sqbXVkzgQAGjzxlfGKIt8FVXGRqemZUrDZLyJIhw/nh2SKHWuDESQd2wHyAXYEY4UXQWron/BFpCApaZOWzYW6kxcrDluxE0AJYYM69HSkIClQwxaHaOsFk0AN0vlBIG05NyteRwo7hRTrXdETzlsEydUk99kBCSJIDA6n9F7QsrxDRd6kzMAn3eOOqgmQfjPtgOSEdA0bciVzHhUVbwez0L/ziFhf+VU7g9GJmq/LtfWSsg/E8dpz2pwGpc/ni3UriwPTVRs+Fbv2f0+kQI/0Jc9NE8OGpIasn/n1olj/3h5DnSGMNDE5+QRBEvs+rM8vXpZ15CaJGfXaOciIiGtV1XUaqXBqjjbmg6JpE/hUFE4z5itg8jW1DSEyuAkInh4cZMoeky52fbQcImp0iExnJghS3PWEKgApMZweU4Cu3/xH1P92KaADjTcKee44MuZNzGx3zYGJLuHLDTqI+i5ebtZ4CgFgjFRseL2KbQcERiF+qqpPa3wVaxdq42gMoCZNMQPJFCA05Mv9JzR79NHCHScm3HE9kDyquNMoQ+DgeNWGz0Sl/0AgnTBNS9/0h2wQ1qdoNgJp6+k5KUZ6LQFUw+qJPlq447j71HxQZHnz5Xq16aGjbVGBiwgyNT14uF4OdQ+jCj/XbrRdg2Q62yNI/W6p3xqBZAkgnhKYJtwh7jjuPjVMG94ISEwtSlmic2B5NBEdIwmjCj88NYkejR5q0sMI0rbjT6ZxfZYAQgFeVMlZXKcxGo67Tw7wgopgEahcD8pj41GDxXrz2kViPtQkfZoGubvuL4IkRUs1B8kyQNwJihoEQe/4wf+L6n1JLgAvGEV4pqHG9dAa3u75+rNzJ4tKAAqPDt/tWSfWrSgW0a49dO32vRzDQYoIIKpDFD14EXLwOLt9EzC8sBOf3jAsxnjGoggkOt45Sxfki4OfrAkp5kTvmj4Ikr929gjLAKEh5BxGB+6oj51LiIY91RS83WOaUKoQT0dO4UHU91S5KHphI9zNggdJDhimH+nqSAeuQ6qYHBXDSRNNjhG3RXVEAKGKgqkTtLDXO17zY/AUjbd7K9FDJlGPRRzTDkFCwLh+ro/49T2gEwWAQKuU9iKIF1h+t+EOoLF8jo8O1PipnNawx1qG6dhRnfHvrNbYk9iRQFvswoGtb9ow3HF30RH+SMCBQ1v5nPhQjlJP78/2TaVasc+asaYdn/5MpZfvyrmtFEND+KER5+g4rxO4RkDimBo/jdMa9TyyPt+6HNI3R4uqlaVFYtXSWcQKqdd2qtcWu3BgK4LQDnQUn7qp8XSiNewRSJ4yemA5b3nFbij4wYKOdWv7pqWcrI2N7nIasYsGtiNInyr6xwayk0eMUUQRH/aYeiVlW0JqF6ejPBZsvMt1d5Oe3GW2Kz5GRlJi8Dt+o+99yAk6Td+4eavd4wXx6Hs8eI73potsuMYFAObi5SbLsqTrrY1/XE1IbE2meWf6iADqzAW7QzaaANlOse5wsCddow8gk93oA6gPIBMETMh9EdQHkAkCJuS+CDIByBk/6M/3Zb9/2x65TQRigXyq/s61KZMdUfEp8BrE6AUFlTBYEQvOW7Vx5HD5zfx5zscVRTisyhjxBYSbz5yvcmeNugoMhfAqTAA0I+ZYWrt6TYw6Vdf600M5SoLTIcP+vB7OLw3d5vrGE+7szHpgxpc3bT/lh7vIvaLdaRGeH07evTTWK/929ZcDI7FDAwiFIZLOpo7POApf6RZDIPWPRGFPk4G3dFNOnlJbhnhkQ0qyDPnNy4qtIQChQHP9+d/d4x7cKxRlHuRaRKhbuXA387jO/qKm3GlRj40croywc+0O6423ZPpQ1emsAoYsOwp7Oq/HI44uesb5mOKQ7YLDyPYOAULmzEWzBsrWlr3wM0pUbplGBtyLtQSXqC19yZkZH2del8Ki2FzXcNszzrWjVUkaC7+B9JpIslO8wwKEu3vl7JW7TWcad7lzMpIh3HrN27BWi7cpQJQCbWclOROOAb3lEcW0eIetQQQO7zMWzChSVMduAKlXvXjeUfG2DRCClbGwIFdpFQcApPs5eLE+NireEQGEQHgXPjFKbVUOAUgZsQ4Mt19xqI1LFjvj3MlKOq5brkFcCY6b6hr/GpQzbIdQlenwI/8QPT1W51S8U93i50GpiifiCCIA0kt8rgGOpN3wzknb78NEjOEe/o3q7uRH5LH/AK5lfFqP9MOeAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>

                <span className="text-6xl leading-none text-black">
                  From 0 to dev in 120 days
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored
                  training: hands-on coaching, industry best practices, and
                  collaborative learning to maximize efficiency and innovation.
                </p>
              </div>
              <div className="col-span-1 rounded-lg bg-gray-200 px-5 pb-5 pt-24 transition duration-500 hover:scale-105 sm:col-span-2">
                <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 py-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <p className="font-bold text-green-900">
                    BECOME A WEB DEVELOPER
                  </p>
                </div>
                <span className="text-6xl leading-none text-black">
                  Streaming lessons
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored
                  training: hands-on coaching, industry best practices, and
                  collaborative learning to maximize efficiency and innovation.
                </p>
              </div>

              {/* Second Row */}
              <div className="col-span-1 rounded-lg bg-gray-200 px-6 pb-6 pt-24 transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <span className="text-4xl leading-none text-black">
                  From 0 to dev in 120 days
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored.
                </p>
              </div>
              <div className="col-span-1 rounded-lg bg-gray-200 px-6 pb-6 pt-24 transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <span className="text-4xl leading-none text-black">
                  Streaming lessons
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored.
                </p>
              </div>
              <div className="col-span-1 rounded-lg bg-gray-200 px-6 pb-6 pt-24 transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <span className="text-4xl leading-none text-black">
                  Streaming lessons
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored.
                </p>
              </div>
              <div className="col-span-1 rounded-lg bg-gray-200 px-6 pb-6 pt-24 transition duration-500 hover:scale-105 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <span className="text-4xl leading-none text-black">
                  Streaming lessons
                </span>
                <p className="text-xl text-gray-400">
                  Elevate your dev team&apos;s performance with our tailored.
                </p>
              </div>

              <div className="col-span-1 rounded-lg bg-gray-800 p-6 text-3xl text-white transition duration-500 hover:scale-105 sm:col-span-2 md:col-span-4 lg:col-span-4">
                <div className="flex flex-row justify-between ">
                  <span className="text-lg sm:text-3xl">
                    Kickstart your career with wesync
                  </span>
                  <button className="btn btn-ghost rounded-full bg-green-200 leading-none text-green-800 sm:px-20">
                    <Link href="mailto:hello@wesync.dev">LET&apos;S START</Link>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </Section>
        <Footer />
      </Background>
    </div>
  </div>
);

export { Education };
