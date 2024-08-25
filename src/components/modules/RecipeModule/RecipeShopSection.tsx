import Image from "next/image";

function RecipeShopSection() {
    const starIcons = Array(5).fill(null)
    return <>
      <div className="mt-4 ml-32">
        <div className="flex h-fit items-center">
            <h2 className="text-4xl">Beli Bahannya~</h2>
            <div className="h-fit items-center content-center">
                <Image src="/images/elm-line.png" alt="green line" width={829} height={100}/>
            </div>
        </div>
        <div className="rounded-lg shadow-lg bg-garlic h-80 w-3/4 ml-6 p-10 overflow-y-auto mt-4 mb-8">
           nunggu sabre mo copas
        </div>
      </div>
    </>
  }

export { RecipeShopSection };