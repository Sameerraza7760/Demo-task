import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  QuerySnapshot,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase/db";
import { hoteLDetail } from "../types/type.hotelDetail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const  useHotelDataManagement = () => {
  const [hotelDetails, setHotelDetails] = useState<hoteLDetail>();
  const [hotels, setHotels] = useState<hoteLDetail[]>([]);
  const [fetch, setFetch] = useState<boolean>(false);

  const setHotelData = async (hotelDetail: hoteLDetail): Promise<void> => {
    try {
      const collectionRef = collection(db, "hotels");
      const docRef = await addDoc(collectionRef, hotelDetail);
      await updateDoc(docRef, { hotelId: docRef.id });
      toast.success("Hotel added successfully!");
      setFetch(true);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchHotels = () => {
      const collectionRef = collection(db, "hotels");
      return onSnapshot(
        collectionRef,
        (snapshot: QuerySnapshot<DocumentData>) => {
          const fetchedHotelDetails: hoteLDetail[] = [];
          snapshot.forEach((doc) => {
            const hotelDetail = doc.data() as hoteLDetail;
            fetchedHotelDetails.push(hotelDetail);
          });
          setHotels(fetchedHotelDetails);
        }
      );
    };
    fetchHotels();
  }, [fetch]);

  const fetchHotelDetails = async (uid: string) => {
    try {
      const docRef = doc(db, "hotels", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const hotelDetail = docSnap.data() as hoteLDetail;
        return hotelDetail;
      } else {
        console.log("No such document!");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    hotelDetails,
    setHotelData,
    fetchHotelDetails,
    hotels,
    fetch,
    setFetch,
  };
};

export default  useHotelDataManagement;
