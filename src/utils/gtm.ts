export const productViewEvent = (params: any) => {
  if (window.dataLayer) {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: 'productView',
      ecommerce: {
        detail: {
          products: [
            {
              name: params.Desc.Info.Name,
              id: params.Desc.ModelId,
              price: params.Desc.Info.Price,
              brand: 'iBUYPOWER',
              category: params.Desc.Info.Prebuild ? 'Prebuild' : 'Configurator',
              variant: 'Gray',
            },
          ],
        },
      },
    });
  }
};

export const checkoutViewEvent = (params: GTMProducts[]) => {
  if (window.dataLayer) {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: 'checkout',
      ecommerce: {
        checkout: {
          actionField: {
            step: 1,
          },
          products: params,
        },
      },
    });
  }
};

export const purchaseViewEvent = (params: GTMProducts[], orderData: any) => {
  if (window.dataLayer) {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        purchase: {
          actionField: {
            id: orderData.id,
            revenue: orderData.revenue,
            tax: orderData.tax,
            shipping: orderData.shipping,
          },
          products: params,
        },
      },
    });
  }
};

export const cjEvent = (params: any, cjToken: any) => {
  if (window.dataLayer && params.OutOrderBundle) {
    const data = {
      orderId: params.OutOrderBundle.WebOrderId.toString(),
      revenue: params.OutOrderBundle.Total.toFixed(2).toString(),
      wholeDiscount:
        -params.OutOrderBundle.Saving > 0
          ? WholeCartDiscount(params.OutOrderBundle.CartItems, -params.OutOrderBundle.Saving)
          : '0',
      FIRECJ: cjToken,
      products: dataLayerProducts(params.OutOrderBundle.CartItems),
    } as any;

    if (params.OutOrderBundle && params.OutOrderBundle.CouponCode.length > 0) {
      data.coupon = params.OutOrderBundle.CouponCode;
    }

    if (-params.OutOrderBundle.Saving > 0) {
      data.discount = (-params.OutOrderBundle.Saving).toFixed(2).toString();
    }

    window.dataLayer.push(data);
  }

  const coupon =
    params.OutOrderBundle && params.OutOrderBundle.CouponCode.length > 0 ? params.OutOrderBundle.CouponCode : '';
  const discount =
    -params.OutOrderBundle.Saving > 0
      ? WholeCartDiscount(params.OutOrderBundle.CartItems, -params.OutOrderBundle.Saving)
      : '0';
  const CJiframe = `<iframe height="1" width="1" frameborder="0" scrolling="no" name="cj_conversion" id="cj_conversion" src=${cjEventSrc(
    params.OutOrderBundle.WebOrderId.toString(),
    cjToken,
    discount,
    coupon,
    dataLayerProducts(params.OutOrderBundle.CartItems)
  )}></iframe>`;

  console.log(CJiframe);
};

const WholeCartDiscount = (CartItems: any[], Saving: number) => {
  const productsAllDiscount = CartItems.map((item: any) => item.Discount * item.Quantity).reduce((a, b) => a + b);

  return (Saving - productsAllDiscount).toFixed(2).toString();
};

const dataLayerProducts = (CartItems: any[]) => {
  const itemList = [] as any[];

  CartItems.map((item: any) => {
    const productSku = item.ModelId > 1 ? item.ModelId.toString() : 'Gear';
    const temp = {
      productSku: productSku,
      productPrice: item.Price.toFixed(2).toString(),
      productQuantity: item.Quantity,
      productDiscount: -(item.Discount * item.Quantity).toFixed(2).toString(),
    };

    itemList.push(temp);
  });

  return itemList;
};

const cjEventSrc = (CJOrderID: string, cjToken: string, discount: any, coupon: any, products: any[]) => {
  let result = `https://www.emjcd.com/tags/c?containerTagId=38068&CID=1561176&OID=${CJOrderID}&TYPE=422235&CURRENCY=USD${coupon}&DISCOUNT=${discount}&CJEVENT=${cjToken}`;

  for (let i = 0; i < products.length; i++) {
    const j = i + 1;

    result =
      result +
      '&ITEM' +
      j.toString() +
      '=' +
      products[i].productSku +
      '&AMT' +
      j.toString() +
      '=' +
      products[i].productPrice +
      '&QTY' +
      j.toString() +
      '=' +
      products[i].productQuantity +
      '&DCNT' +
      j.toString() +
      '=' +
      products[i].productDiscount;
  }

  return result;
};

export const pushSearchDataLayer = (searchString: string) => {
  const dataLayer = window.dataLayer || [];
  const pushData = {
    event: 'searchSubmit',
    SearchParam: searchString,
  };

  dataLayer.push(pushData);
};

interface GTMProducts {
  id: string;
  name: string;
  category?: string;
  brand?: string;
  price?: string;
  quantity: number;
}
