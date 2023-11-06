import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

interface Item extends ReadableStream<Uint8Array> {}

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
  let data = await request.json();
  let gameList:{id:number, name:string,price:number}[] = data.gameList;
  let totalPrice = data.price;
  console.log(gameList);
  const session = await stripe.checkout.sessions.create({
    line_items: gameList.map((game) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: game.name,
          },
          unit_amount: game.price * 100,
        },
        quantity: 1,
      };
    }),

    // [
    //   {
    //     price: totalPrice,
    //     quantity: gameList.length,
    //   },
    // ],
    // submit_type: "pay",
    mode: "payment",
    // payment_method_types: ["card"],
    // billing_address_collection: "auto",
    success_url: `http://localhost:3000`,
    cancel_url: `http://localhost:3000`,
  });
  return NextResponse.json(session.url);
}

// export async function POST(req:Request, res:Response) {
//   if (req.method === 'POST') {
//     try {
//       console.log("======INSIDE THE HANDLER=========")
//       console.log(req?.body)
//     //   const params = {
//     //     submit_type: "pay",
//     //     mode: "payment",
//     //     payment_method_types: ["card"],
//     //     billing_address_collection: "auto",
//     //     line_items: req?.body?.map(item=>{
//     //         const img = item.image[0].asset._ref;
//     //         const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vjj82htn/production/').replace('-webp', '.webp');
//     //         // console.log('IMAGE', newImage);

//     //         return {
//     //             price_data: {
//     //                 currency: 'usd',
//     //                 product_data: {
//     //                     name: item.name,
//     //                     images: [newImage],
//     //                 },
//     //                 unit_amount: item.price * 100,
//     //             },
//     //             adjustable_quantity: {
//     //                 enabled: true,
//     //                 minimum: 1,
//     //             },
//     //             quantity: item.quantity,
//     //         }
//     //     }),
//     //     success_url: `${req.headers.origin}/success`,
//     //     cancel_url: `${req.headers.origin}/canceled`,
//     //   };

//     //   // Create Checkout Sessions from body params.
//     //   const session = await stripe.checkout.sessions.create(params);
//     // //   res.redirect(303, session.url);
//     //   res.status(200).json(session);
//     } catch (err) {
//     //   res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     // res.setHeader("Allow", "POST");
//     // res.status(405).end("Method Not Allowed");
//   }
// }
