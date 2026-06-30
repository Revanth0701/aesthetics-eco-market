import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard, Lock, MapPin, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const SHIPPING_COST = 5.99;
const TAX_RATE = 0.08;

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [orderId, setOrderId] = useState("");

  const subtotal = cartTotal;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_COST + tax;

  const steps = [
    { n: 1, label: "Shipping", icon: MapPin },
    { n: 2, label: "Payment", icon: CreditCard },
    { n: 3, label: "Review", icon: ShoppingBag },
    { n: 4, label: "Confirmation", icon: Check },
  ];

  const validateShipping = () => {
    const required = ["fullName", "email", "address", "city", "state", "zip"] as const;
    for (const k of required) {
      if (!shipping[k].trim()) {
        toast({ title: "Missing info", description: `Please enter your ${k}.`, variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const validatePayment = () => {
    if (paymentMethod === "applepay") return true;
    const { cardNumber, cardName, expiry, cvv } = payment;
    if (!cardNumber || !cardName || !expiry || !cvv) {
      toast({ title: "Missing info", description: "Please complete card details.", variant: "destructive" });
      return false;
    }
    if (cardNumber.replace(/\s/g, "").length < 12) {
      toast({ title: "Invalid card", description: "Card number looks too short.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const placeOrder = () => {
    const id = "ECO-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setStep(4);
    clearCart();
    toast({ title: "Order placed!", description: `Your order ${id} has been confirmed.` });
  };

  if (cartCount === 0 && step !== 4) {
    return (
      <Layout>
        <div className="eco-container py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-eco-stone mb-4" />
          <h1 className="text-3xl font-serif mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add a product before checking out.</p>
          <Button className="bg-eco-green hover:bg-eco-green/90" onClick={() => navigate("/shop")}>
            Browse Shop
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="eco-container py-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Checkout</h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10 max-w-3xl">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const active = step === s.n;
            const done = step > s.n;
            return (
              <div key={s.n} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      done
                        ? "bg-eco-green border-eco-green text-white"
                        : active
                        ? "border-eco-green text-eco-green"
                        : "border-eco-stone/40 text-eco-stone"
                    }`}
                  >
                    {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <span className={`text-xs mt-2 ${active ? "text-eco-green font-medium" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${step > s.n ? "bg-eco-green" : "bg-eco-stone/30"}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-eco-stone/20 p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-eco-green" /> Shipping Address
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Label>Full Name *</Label>
                    <Input value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input type="email" value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input value={shipping.phone} onChange={(e) => setShipping({ ...shipping, phone: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Street Address *</Label>
                    <Input value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
                  </div>
                  <div>
                    <Label>City *</Label>
                    <Input value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
                  </div>
                  <div>
                    <Label>State *</Label>
                    <Input value={shipping.state} onChange={(e) => setShipping({ ...shipping, state: e.target.value })} />
                  </div>
                  <div>
                    <Label>ZIP / Postal *</Label>
                    <Input value={shipping.zip} onChange={(e) => setShipping({ ...shipping, zip: e.target.value })} />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => navigate("/shop")}>Back to Shop</Button>
                  <Button
                    className="bg-eco-green hover:bg-eco-green/90"
                    onClick={() => validateShipping() && setStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-eco-green" /> Payment Method
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" /> All transactions are secure and encrypted.
                  </p>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <label
                    className={`flex items-center justify-between gap-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                      paymentMethod === "card" ? "border-eco-green bg-eco-green/5 ring-1 ring-eco-green" : "border-eco-stone/30 hover:border-eco-stone/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="card" />
                      <div>
                        <p className="font-medium">Credit / Debit Card</p>
                        <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex, Discover</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="px-2 py-1 text-[10px] font-bold rounded bg-[#1A1F71] text-white">VISA</span>
                      <span className="px-2 py-1 text-[10px] font-bold rounded bg-[#EB001B] text-white">MC</span>
                      <span className="px-2 py-1 text-[10px] font-bold rounded bg-[#006FCF] text-white">AMEX</span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center justify-between gap-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                      paymentMethod === "applepay" ? "border-eco-green bg-eco-green/5 ring-1 ring-eco-green" : "border-eco-stone/30 hover:border-eco-stone/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="applepay" />
                      <div>
                        <p className="font-medium">Apple Pay</p>
                        <p className="text-xs text-muted-foreground">Fast, secure checkout with Touch ID or Face ID</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-md bg-black text-white"> Pay</span>
                  </label>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="sm:col-span-2">
                      <Label>Card Number</Label>
                      <div className="relative">
                        <Input
                          placeholder="1234 5678 9012 3456"
                          value={payment.cardNumber}
                          onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                          className="pl-10"
                          inputMode="numeric"
                          autoComplete="cc-number"
                        />
                        <CreditCard className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Name on Card</Label>
                      <Input
                        placeholder="As shown on card"
                        value={payment.cardName}
                        onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                        autoComplete="cc-name"
                      />
                    </div>
                    <div>
                      <Label>Expiry (MM/YY)</Label>
                      <Input
                        placeholder="12/27"
                        value={payment.expiry}
                        onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                        autoComplete="cc-exp"
                      />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <div className="relative">
                        <Input
                          type="password"
                          maxLength={4}
                          placeholder="•••"
                          value={payment.cvv}
                          onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                          autoComplete="cc-csc"
                          className="pr-10"
                        />
                        <Lock className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "applepay" && (
                  <div className="rounded-lg border border-eco-stone/30 bg-eco-sand/30 p-4 text-sm text-muted-foreground">
                    You'll be prompted to confirm payment with Apple Pay after reviewing your order.
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-eco-sand/40 rounded-md p-3">
                  <ShieldCheck className="h-4 w-4 text-eco-green shrink-0" />
                  <span>Your payment info is protected with bank-level 256-bit SSL encryption.</span>
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button
                    className="bg-eco-green hover:bg-eco-green/90"
                    onClick={() => validatePayment() && setStep(3)}
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-eco-green" /> Review Your Order
                </h2>

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2"><Truck className="h-4 w-4" /> Shipping to</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>{shipping.fullName}</p>
                    <p>{shipping.address}, {shipping.city}, {shipping.state} {shipping.zip}</p>
                    <p>{shipping.country}</p>
                    <p>{shipping.email} {shipping.phone && `· ${shipping.phone}`}</p>
                  </div>
                  <Button variant="link" className="px-0 text-eco-green" onClick={() => setStep(1)}>Edit</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2"><CreditCard className="h-4 w-4" /> Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    {paymentMethod === "card" && `Card ending in ${payment.cardNumber.slice(-4)}`}
                    {paymentMethod === "upi" && "UPI"}
                    {paymentMethod === "cod" && "Cash on Delivery"}
                  </p>
                  <Button variant="link" className="px-0 text-eco-green" onClick={() => setStep(2)}>Edit</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Items ({cartCount})</h3>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex gap-3">
                          <img src={item.images[0]} alt={item.name} className="w-12 h-12 rounded object-cover" />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button className="bg-eco-green hover:bg-eco-green/90" onClick={placeOrder}>
                    Place Order · ${total.toFixed(2)}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-10">
                <div className="h-16 w-16 rounded-full bg-eco-green/10 mx-auto flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-eco-green" />
                </div>
                <h2 className="text-2xl font-serif mb-2">Thank you for your order!</h2>
                <p className="text-muted-foreground mb-2">Your order ID is</p>
                <p className="text-lg font-medium text-eco-green mb-6">{orderId}</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  A confirmation email has been sent to {shipping.email || "you"}. Our artisans will begin
                  preparing your handcrafted items shortly.
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" asChild><Link to="/">Back to Home</Link></Button>
                  <Button className="bg-eco-green hover:bg-eco-green/90" asChild><Link to="/shop">Continue Shopping</Link></Button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          {step !== 4 && (
            <div className="bg-eco-sand/40 rounded-lg border border-eco-stone/20 p-6 h-fit">
              <h3 className="font-medium text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm max-h-64 overflow-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${SHIPPING_COST.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span className="text-eco-green">${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
