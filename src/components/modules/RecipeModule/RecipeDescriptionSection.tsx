import Image from "next/image";

function RecipeDescriptionSection() {
    const starIcons = Array(5).fill(null)
    return <>
      <div className="mt-24 flex ml-32 mr-60 justify-between gap-4">
        <div className="">
            <h1 className="text-6xl text-textBlack font-normal">
                Sop Bayam Jagung
            </h1>
            <div className="flex gap-3 max-h-8 mt-6 mr-4 items-center">
                <div className="flex h-fit content-center items-center">
                    {starIcons.map((_, index) => (
                        <Image
                        key={index}
                        src='/images/icon-resep-star.png'
                        width={20}
                        height={20}
                        alt='icon star'
                    />
                  ))}
                </div>
                <div className="flex  items-center gap-1">
                    <Image src="/images/icon-resep-clock.png" alt="Clock" width={30} height={30}/>
                    <p>10 menit</p>
                </div>
                <div className="flex items-center gap-1">
                <Image src="/images/icon-resep-user.png" alt="User" width={28} height={23}/>
                    <p>2 porsi</p>
                </div>
            </div>
            <h3 className="font-light text-xl text-textBlack pr-36 mt-6">
                Sop bayam jagung adalah sop yang sehat dan bahan-bahannya simpel, yuk simak cara membuatnya!
            </h3>
        </div>
        <div className="rounded-lg overflow-hidden flex-end h-max w-max">
            <Image src="/images/img-resep-sup_bayam_jagung.jpg" alt="Sop Bayam Jagung" width={700} height={500}/>
        </div>
      </div>
    </>
  }

export { RecipeDescriptionSection };