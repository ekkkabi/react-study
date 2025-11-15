import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={increase}>increase</Button>
      <Button onClick={decrease}>decrease</Button>
    </div>
  );
}
