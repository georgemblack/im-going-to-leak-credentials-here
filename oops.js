async function main() {
  const response = await fetch(
    "https://super-secret-resource.georgeblack.workers.dev",
    {
      headers: {
        "CF-Access-Client-Id": "5211aba7020c6962f62dc850f41c8fa2.access",
        "CF-Access-Client-Secret": "cfast_qVCgdLWP0EkDPG1iHdgmVELCT5601eSkqWd5DFjhfe81b3cf",
      },
    }
  );

  console.log(`HTTP ${response.status}`);
  console.log(await response.text());
}

main().catch(console.error);
