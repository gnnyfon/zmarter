import Image from "next/image";

function RecipeIngredientsSection() {
    const starIcons = Array(5).fill(null)
    return <>
      <div className="mt-4 ml-32">
        <div className="flex h-fit items-center">
            <h2 className="text-4xl mr-6">Bahan-bahan</h2>
            <div className="h-fit items-center content-center">
                <Image src="/images/elm-line.png" alt="green line" width={829} height={100}/>
            </div>
        </div>
        <div className="rounded-lg shadow-lg bg-garlic h-80 w-3/4 ml-6 p-10 mt-4 mb-8">
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 ikat</span> Bayam</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 buah</span> Jagung</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">2 siung</span> Bawang Putih</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">2 buah</span> Cabai</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 sdt</span> Gula</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 sdt</span> Garam</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 helai</span> Daun Salam</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">1 sdm</span> Minyak Gpreng</p>
            <p className="text-textBlack text-xl font-regular">• <span className="text-spinach font-medium">200 ml</span> Air</p>
        </div>
      </div>
    </>
  }

export { RecipeIngredientsSection };