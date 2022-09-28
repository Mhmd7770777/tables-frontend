import Head from "next/head";
import Image from "next/image";
import Button from "../components/Atoms/Button/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Button
        children={`Hi there`}
        backgroundColor="blue"
        borderRadius={"50px"}
      />
    </div>
  );
}
